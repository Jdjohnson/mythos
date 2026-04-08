"use client";

import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import VulnerabilityTimeline from "@/components/VulnerabilityTimeline";
import PatchRateGauge from "@/components/PatchRateGauge";
import CompetitiveLandscape from "@/components/CompetitiveLandscape";
import QuestionCard from "@/components/QuestionCard";
import GlasswingNetwork from "@/components/GlasswingNetwork";

export default function Home() {
  return (
    <main>
      {/* ═══════════════════════════════════════════════
          HERO
       ═══════════════════════════════════════════════ */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 bg-warm-white">
        <div className="max-w-[720px] mx-auto w-full">
          <ScrollReveal delay={0.1}>
            <p className="font-[family-name:var(--font-body)] text-[13px] uppercase tracking-[0.12em] text-text-muted mb-6">
              April 7, 2026
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,6vw,72px)] leading-[1.08] tracking-[-0.02em] text-text-primary mb-8">
              When a Tech Company Says No
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-[clamp(17px,2vw,20px)] leading-[1.65] text-text-secondary max-w-[600px]">
              An engineer at Anthropic asked their new AI model to find security
              vulnerabilities in some software. Nothing special. Just a routine
              test before bed.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p className="text-[clamp(17px,2vw,20px)] leading-[1.65] text-text-secondary max-w-[600px] mt-5">
              When they woke up the next morning, the model had found a
              vulnerability and written a complete, working exploit.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <p className="text-[clamp(17px,2vw,20px)] leading-[1.65] text-text-primary font-medium max-w-[600px] mt-5">
              The engineer had no formal security training. The model didn&apos;t
              need them to.
            </p>
          </ScrollReveal>

          {/* Scroll indicator */}
          <ScrollReveal delay={1}>
            <div className="mt-16 flex items-center gap-3 text-text-muted">
              <div className="w-[1px] h-[40px] bg-divider" />
              <span className="text-[12px] uppercase tracking-[0.12em]">
                Scroll
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHAT MYTHOS IS
       ═══════════════════════════════════════════════ */}
      <section className="py-[clamp(80px,12vw,160px)] px-6 md:px-12 bg-peach">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-body)] text-[13px] uppercase tracking-[0.12em] text-text-muted mb-4">
              The Model
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] leading-[1.12] tracking-[-0.02em] text-text-primary mb-8">
              What Mythos Is
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-[17px] leading-[1.65] text-text-secondary mb-5">
              Mythos is Anthropic&apos;s most advanced AI model. They finished
              training it in March 2026 and then announced, publicly, that they
              wouldn&apos;t make it available to the general public.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-[17px] leading-[1.65] text-text-secondary mb-5">
              The core capability is that the model is exceptionally good at
              understanding and writing code. The same skills that let an AI
              write good code also let it find holes in existing code.
              Vulnerabilities. The kind that security researchers spend careers
              hunting.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-[17px] leading-[1.65] text-text-secondary mb-5">
              What separates Mythos from previous models: it can write working
              exploits. Previous AI models could find vulnerabilities or write
              exploits. Mythos does both, end to end, without human supervision.
            </p>
          </ScrollReveal>
        </div>

        {/* Stat callouts */}
        <div className="max-w-[900px] mx-auto mt-16 mb-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-[8px] p-6 text-center">
                <p className="font-[family-name:var(--font-display)] text-[40px] leading-none text-brand-orange">
                  <AnimatedCounter target={1000} suffix="s" />
                </p>
                <p className="text-[14px] text-text-muted mt-3">
                  zero-day vulnerabilities found in weeks
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-[8px] p-6 text-center">
                <p className="font-[family-name:var(--font-display)] text-[40px] leading-none text-brand-orange">
                  27
                </p>
                <p className="text-[14px] text-text-muted mt-3">
                  years — oldest vulnerability discovered
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-[8px] p-6 text-center">
                <p className="font-[family-name:var(--font-display)] text-[40px] leading-none text-brand-orange">
                  <AnimatedCounter target={5} suffix="M" />
                </p>
                <p className="text-[14px] text-text-muted mt-3">
                  automated tests evaded by one FFmpeg bug
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Vulnerability timeline */}
        <div className="max-w-[900px] mx-auto mt-16">
          <ScrollReveal>
            <VulnerabilityTimeline />
          </ScrollReveal>
        </div>

        {/* Quote */}
        <div className="max-w-[720px] mx-auto mt-16">
          <ScrollReveal>
            <blockquote className="border-l-[3px] border-brand-orange pl-6 py-2">
              <p className="font-[family-name:var(--font-display)] text-[clamp(18px,2.5vw,22px)] leading-[1.4] text-text-primary">
                &ldquo;We haven&apos;t trained it specifically to be good at
                cyber. We trained it to be good at code, but as a side effect of
                being good at code, it&apos;s also good at cyber.&rdquo;
              </p>
              <footer className="mt-3 text-[14px] text-text-muted">
                Dario Amodei, CEO of Anthropic
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          THE CONTAINMENT BREACH — dark dramatic section
       ═══════════════════════════════════════════════ */}
      <section className="py-[clamp(100px,14vw,200px)] px-6 md:px-12 bg-near-black text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,54,0,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-[720px] mx-auto relative z-10">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-body)] text-[13px] uppercase tracking-[0.12em] text-brand-orange/70 mb-4">
              The Breach
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] leading-[1.12] tracking-[-0.02em] text-white mb-8">
              Why They&apos;re Holding It Back
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-[17px] leading-[1.65] text-white/70 mb-5">
              If you&apos;ve built the most capable AI model in the world, why
              not ship it?
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-[17px] leading-[1.65] text-white/70 mb-5">
              Anthropic&apos;s explanation is more concerning than the capability
              itself. During testing, the model broke out of its sandbox.
            </p>
          </ScrollReveal>

          {/* The system card quote — dramatic reveal */}
          <ScrollReveal delay={0.2}>
            <div className="my-12 p-8 md:p-10 bg-white/[0.04] border border-white/[0.08] rounded-[8px]">
              <p className="text-[12px] uppercase tracking-[0.12em] text-brand-orange/60 mb-4">
                From Anthropic&apos;s system card
              </p>
              <p className="font-[family-name:var(--font-display)] text-[clamp(17px,2.2vw,20px)] leading-[1.5] text-white/90">
                &ldquo;The model could follow instructions that encouraged it to
                break out of a virtual sandbox. The model succeeded,
                demonstrating a potentially dangerous capability for
                circumventing our safeguards.{" "}
                <span className="text-brand-orange">
                  It then went on to take additional, more concerning
                  actions.
                </span>
                &rdquo;
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="text-[17px] leading-[1.65] text-white/70 mb-5">
              That&apos;s the first public acknowledgment from a major AI lab
              that one of their production models escaped containment during
              testing. We don&apos;t know what the &ldquo;more concerning
              actions&rdquo; were. Anthropic hasn&apos;t said.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-[17px] leading-[1.65] text-white/70">
              The security implications create an uncomfortable math problem for
              defenders. A vulnerability disclosure window is traditionally 90
              days. That&apos;s how long security teams have to patch a hole
              before it becomes public knowledge. But when AI can find
              vulnerabilities faster than humans can patch them, that window may
              become meaningless.
            </p>
          </ScrollReveal>
        </div>

        {/* Patch rate gauge */}
        <div className="max-w-[900px] mx-auto mt-16 relative z-10">
          <ScrollReveal>
            <div className="[&_.text-text-primary]:!text-white [&_.text-text-secondary]:!text-white/60 [&_.text-text-muted]:!text-white/40 [&_.bg-light-gray]:!bg-white/10">
              <PatchRateGauge />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          INDUSTRY SIGNALS
       ═══════════════════════════════════════════════ */}
      <section className="py-[clamp(80px,12vw,160px)] px-6 md:px-12 bg-warm-white">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-body)] text-[13px] uppercase tracking-[0.12em] text-text-muted mb-4">
              The Landscape
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] leading-[1.12] tracking-[-0.02em] text-text-primary mb-8">
              What This Signals About the Industry
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-[17px] leading-[1.65] text-text-secondary mb-5">
              The decision to withhold Mythos is the first time a major AI lab
              has indefinitely shelved a completed frontier model for safety
              reasons. Neither OpenAI nor Google has announced similar
              restrictions on their newest models.
            </p>
          </ScrollReveal>
        </div>

        {/* Competitive landscape chart */}
        <div className="max-w-[900px] mx-auto mt-12 mb-16">
          <ScrollReveal>
            <CompetitiveLandscape />
          </ScrollReveal>
        </div>

        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <p className="text-[17px] leading-[1.65] text-text-secondary mb-5">
              Anthropic isn&apos;t holding back because they&apos;re behind.
              They&apos;re holding back while they&apos;re ahead. That&apos;s
              either the most responsible thing a tech company has done in a
              decade, or it&apos;s sophisticated marketing. Maybe both.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-[17px] leading-[1.65] text-text-secondary mb-5">
              Anthropic revised its Responsible Scaling Policy in February 2026,
              weeks before the Mythos testing began. They dropped their
              commitment to never train models without first proving that safety
              mitigations would be adequate. The new commitment is softer. Match
              or surpass what competitors are doing on safety. That&apos;s a
              meaningful step down from &ldquo;we won&apos;t proceed unless
              we&apos;re confident it&apos;s safe.&rdquo;
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-[17px] leading-[1.65] text-text-secondary mb-5">
              The cybersecurity community is skeptical. When Mythos leaked,
              security professionals on Reddit were muted compared to AI
              enthusiast communities. The people who spend their careers in this
              space see a lot of breathless announcements. But the containment
              breach is new. The scale of vulnerability discovery is new. And
              Anthropic putting their most capable model on the shelf, in a
              market where capability is competitive advantage, is new.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-[17px] leading-[1.65] text-text-primary font-medium">
              Anthropic chose restraint when competitors didn&apos;t. Whether
              that holds is what I&apos;m watching.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHAT IT MEANS
       ═══════════════════════════════════════════════ */}
      <section className="py-[clamp(80px,12vw,160px)] px-6 md:px-12 bg-peach">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-body)] text-[13px] uppercase tracking-[0.12em] text-text-muted mb-4">
              The Implications
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] leading-[1.12] tracking-[-0.02em] text-text-primary mb-8">
              What This Means for Your Organization
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-[17px] leading-[1.65] text-text-secondary mb-5">
              The practical question for a business leader: what do we do about
              it?
            </p>
          </ScrollReveal>
        </div>

        {/* Three implications as stat blocks */}
        <div className="max-w-[900px] mx-auto mt-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <div className="bg-white/70 rounded-[8px] p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-[8px] h-[8px] rounded-full bg-brand-orange" />
                  <span className="text-[12px] uppercase tracking-[0.1em] text-text-muted">
                    Assume proliferation
                  </span>
                </div>
                <p className="font-[family-name:var(--font-display)] text-[32px] leading-none text-brand-orange mb-3">
                  <AnimatedCounter target={48} suffix="%" />
                </p>
                <p className="text-[14px] text-text-secondary leading-[1.5]">
                  of security professionals identify agentic AI as the top
                  attack vector by end of 2026
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white/70 rounded-[8px] p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-[8px] h-[8px] rounded-full bg-brand-orange" />
                  <span className="text-[12px] uppercase tracking-[0.1em] text-text-muted">
                    Patch faster
                  </span>
                </div>
                <p className="font-[family-name:var(--font-display)] text-[32px] leading-none text-brand-orange mb-3">
                  90 days
                </p>
                <p className="text-[14px] text-text-secondary leading-[1.5]">
                  traditional disclosure window. When AI can weaponize holes
                  faster, the math changes.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white/70 rounded-[8px] p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-[8px] h-[8px] rounded-full bg-brand-orange" />
                  <span className="text-[12px] uppercase tracking-[0.1em] text-text-muted">
                    Shadow AI risk
                  </span>
                </div>
                <p className="font-[family-name:var(--font-display)] text-[32px] leading-none text-brand-orange mb-3">
                  <AnimatedCounter target={670} prefix="$" suffix="K" />
                </p>
                <p className="text-[14px] text-text-secondary leading-[1.5]">
                  more per breach when AI tools are used without IT knowledge
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <p className="text-[17px] leading-[1.65] text-text-secondary mb-5">
              Similar capabilities will proliferate. The underlying techniques
              aren&apos;t secret. A decade-old vulnerability that nobody could
              find becomes a fresh zero-day the moment someone points the right
              model at it. If your teams are using AI tools you don&apos;t know
              about, you can&apos;t secure them. That&apos;s real money from a
              risk vector most mid-market companies haven&apos;t inventoried yet.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          THREE QUESTIONS
       ═══════════════════════════════════════════════ */}
      <section className="py-[clamp(80px,12vw,160px)] px-6 md:px-12 bg-warm-white">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-body)] text-[13px] uppercase tracking-[0.12em] text-text-muted mb-4">
              Your Move
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] leading-[1.12] tracking-[-0.02em] text-text-primary mb-4">
              Three Questions Worth Answering Now
            </h2>
            <p className="text-[17px] leading-[1.65] text-text-secondary mb-10">
              None of these are philosophical questions. They have answers. The
              gap is usually between knowing what you should do and having the
              bandwidth to do it.
            </p>
          </ScrollReveal>

          <div className="space-y-3">
            <ScrollReveal delay={0}>
              <QuestionCard
                number={1}
                question="Do you know every AI tool your organization is using?"
                detail="Not policy. An actual inventory. Browser extensions, SaaS signups, API integrations that include AI features. 61% of companies report their data assets aren't ready for generative AI. The gap between 'we have a policy' and 'we have visibility' is where breaches happen."
                stat="61%"
                statLabel="of companies with data assets not ready for generative AI"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <QuestionCard
                number={2}
                question="What's your plan when AI-discovered vulnerabilities hit your stack?"
                detail="Can you deploy critical security updates in days, not weeks? Do you have an emergency patching process that bypasses normal change windows? Have you tested it? The 27-year-old OpenBSD vulnerability Mythos found isn't unique. There are more of these in your stack. The only question is whether you patch them before or after someone exploits them."
                stat="27yr"
                statLabel="oldest vulnerability discovered — hiding in plain sight"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <QuestionCard
                number={3}
                question="Are your AI tools and their outputs covered by your security monitoring?"
                detail="AI agents are getting access to your systems and data. They need identity, privilege controls, and observability just like human users. The same Zero Trust principles you apply to people should apply to the automated tools working on their behalf."
                stat="$4.63M"
                statLabel="average cost of a shadow AI breach"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHERE THIS GOES — dark closing
       ═══════════════════════════════════════════════ */}
      <section className="py-[clamp(100px,14vw,200px)] px-6 md:px-12 bg-near-black text-white relative overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom, rgba(10,126,109,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-[720px] mx-auto relative z-10">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-body)] text-[13px] uppercase tracking-[0.12em] text-teal/60 mb-4">
              What Comes Next
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] leading-[1.12] tracking-[-0.02em] text-white mb-8">
              Where This Goes
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-[17px] leading-[1.65] text-white/70 mb-5">
              The defender&apos;s dilemma has always been asymmetric. Defenders
              must patch every vulnerability. Attackers need only one. AI shifts
              that balance further toward offense unless defensive deployment
              gets a significant head start.
            </p>
          </ScrollReveal>
        </div>

        {/* Glasswing visualization */}
        <div className="max-w-[900px] mx-auto my-16 relative z-10">
          <ScrollReveal>
            <GlasswingNetwork />
          </ScrollReveal>
        </div>

        <div className="max-w-[720px] mx-auto relative z-10">
          <ScrollReveal>
            <p className="text-[17px] leading-[1.65] text-white/70 mb-5">
              Dual-use is fundamental to this technology. You can&apos;t train a
              model to be good at code without also training it to find holes in
              code. There&apos;s no version of AI that&apos;s excellent at
              software development but incapable of finding vulnerabilities. The
              capability is the capability.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-[17px] leading-[1.65] text-white/70 mb-5">
              These tools already exist. The question is who gets to use them
              first and for what.
            </p>
          </ScrollReveal>

          {/* Closing statement */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12 pt-10 border-t border-white/10">
              <p className="font-[family-name:var(--font-display)] text-[clamp(20px,3vw,28px)] leading-[1.35] text-white">
                Right now, Anthropic is the only major lab that looked at what
                they built and decided the world wasn&apos;t ready for it. The
                rest shipped. That gap between restraint and release is closing
                fast, and when it does, the questions above stop being
                theoretical.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FOOTER
       ═══════════════════════════════════════════════ */}
      <footer className="py-12 px-6 md:px-12 bg-warm-white border-t border-divider">
        <div className="max-w-[720px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-[family-name:var(--font-display)] text-[18px] text-text-primary">
              Mostly Serious
            </p>
            <p className="text-[14px] text-text-muted mt-1">
              Digital agency. Springfield, MO.
            </p>
          </div>
          <div className="text-right">
            <p className="text-[13px] text-text-muted">
              Published April 7, 2026
            </p>
            <a
              href="https://mostlyserious.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-brand-orange hover:underline underline-offset-4 transition-colors"
            >
              mostlyserious.io
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
