"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";

const navLinkStyle: CSSProperties = {
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

const OFFSET_VAR = "--site-header-offset";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isTeam = pathname === "/team";

  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const [concealed, setConcealed] = useState(false);

  const syncHeaderOffset = useCallback(() => {
    const el = headerRef.current;
    if (!el) return;
    const h = el.offsetHeight;
    document.documentElement.style.setProperty(OFFSET_VAR, `${Math.ceil(h)}px`);
  }, []);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    syncHeaderOffset();
    const ro = new ResizeObserver(syncHeaderOffset);
    ro.observe(el);
    window.addEventListener("resize", syncHeaderOffset);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncHeaderOffset);
    };
  }, [pathname, syncHeaderOffset]);

  useEffect(() => {
    setConcealed(false);
    lastScrollY.current =
      typeof window !== "undefined" ? window.scrollY : 0;
  }, [pathname]);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const prev = lastScrollY.current;
        const delta = y - prev;
        lastScrollY.current = y;

        const nearTop = y < 40;
        if (nearTop) {
          setConcealed(false);
          return;
        }

        if (delta > 5) setConcealed(true);
        else if (delta < -5) setConcealed(false);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    lastScrollY.current = window.scrollY;
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const headerClass =
    concealed ? "site-header is-concealed" : "site-header";

  return (
    <header ref={headerRef} className={headerClass}>
      <nav className="site-header-nav" aria-label="Primary">
        <Link className="logo" href="/">
          <img
            src="/meagain_icon.png"
            alt="MeAgain Icon"
            style={{ width: "36px", height: "auto" }}
          />
          <span>MeAgain</span>
        </Link>
        <div className="nav-actions">
          <Link
            href="/team"
            className={
              isTeam ? "nav-cta nav-cta--outline is-active" : "nav-cta nav-cta--outline"
            }
            style={navLinkStyle}
            aria-current={isTeam ? "page" : undefined}
          >
            Meet the team
          </Link>
          {isHome ? (
            <>
              <button
                type="button"
                className="nav-cta"
                onClick={() => scrollTo("waitlist")}
              >
                Register for early access
              </button>
              <button
                type="button"
                className="nav-cta"
                onClick={() => scrollTo("survey-section")}
                style={{
                  ...navLinkStyle,
                  background: "var(--coral)",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Help shape MeAgain
              </button>
            </>
          ) : (
            <>
              <Link href="/#waitlist" className="nav-cta" style={navLinkStyle}>
                Register for early access
              </Link>
              <Link
                href="/"
                className="nav-cta"
                style={{
                  ...navLinkStyle,
                  background: "var(--coral)",
                  color: "#fff",
                }}
              >
                Home
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
