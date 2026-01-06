export default function Copyright ()
{
    return (
      <footer className="p-6 border-t border-(--border) bg-(--bg-primary)">
        <div className="flex flex-col items-center gap-2">
          <p className="text-(--text-secondary) text-xs tracking-widest uppercase glow-text">
            &copy; 2026 206CE <span className="mx-2">|</span> Operational
            Protocol v1.0
          </p>
          <p className="distort-hover text-[10px] text-(--text-tertiary)] cursor-default">
            Unauthorized duplication is a violation of system integrity.
          </p>
        </div>
      </footer>
    );
}