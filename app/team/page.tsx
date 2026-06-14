import { OPEN_ROLE, TEAM_MEMBERS } from "@/lib/team";

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function HiringIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" y1="8" x2="19" y2="14" />
      <line x1="22" y1="11" x2="16" y2="11" />
    </svg>
  );
}

function TeamCard({
  name,
  role,
  initials,
  bio,
  linkedIn,
}: {
  name: string;
  role: string;
  initials: string;
  bio: string[];
  linkedIn?: string;
}) {
  return (
    <article className="team-card">
      <div className="team-card-header">
        <div className="team-card-identity">
          <div className="team-avatar" aria-hidden>
            {initials}
          </div>
          <div className="team-card-titles">
            <h2 className="team-card-name">{name}</h2>
            <p className="team-card-role">{role}</p>
          </div>
        </div>
        {linkedIn ? (
          <a
            className="team-linkedin"
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        ) : null}
      </div>
      <div className="team-card-divider" aria-hidden />
      <div className="team-card-bio">
        {bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

function HiringCard() {
  const mailto = `mailto:${OPEN_ROLE.contactEmail}?subject=Clinical%20Co-Founder%20%E2%80%94%20MeAgain`;

  return (
    <article className="team-card team-card--hiring">
      <span className="team-hiring-badge">
        <span className="team-hiring-dot" aria-hidden />
        Hiring
      </span>
      <div className="team-card-header">
        <div className="team-card-identity">
          <div className="team-avatar team-avatar--hiring" aria-hidden>
            <HiringIcon />
          </div>
          <div className="team-card-titles">
            <h2 className="team-card-name">{OPEN_ROLE.name}</h2>
            <p className="team-card-role">{OPEN_ROLE.role}</p>
          </div>
        </div>
      </div>
      <div className="team-card-divider" aria-hidden />
      <div className="team-card-bio">
        {OPEN_ROLE.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <div className="team-card-footer">
        <a className="team-card-cta" href={mailto}>
          Get in touch →
        </a>
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <main className="team-route">
      <div className="team-route-inner">
        <header className="team-route-header">
          <p className="team-route-tag">Our team</p>
          <h1 className="team-route-title">MeAgain Team</h1>
        </header>

        <div className="team-grid">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              initials={member.initials}
              bio={member.bio}
              linkedIn={member.linkedIn}
            />
          ))}
          <HiringCard />
        </div>
      </div>
    </main>
  );
}
