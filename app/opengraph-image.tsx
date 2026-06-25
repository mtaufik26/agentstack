import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'AI Agents Platform — Hire an AI Workforce, Not Just a Chatbot';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0d0d0d 100%)',
          padding: '60px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Glow effect */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            right: '-200px',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Logo badge */}
        <div
          style={{
            position: 'absolute',
            top: '48px',
            left: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 900,
              color: '#0a0a0a',
            }}
          >
            AI
          </div>
          <span style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em' }}>
            AI Agents
          </span>
        </div>

        {/* Tag */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '999px',
            padding: '6px 16px',
            marginBottom: '24px',
          }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399' }} />
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: 500, letterSpacing: '0.05em' }}>
            AI WORKFORCE PLATFORM
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            maxWidth: '820px',
            marginBottom: '20px',
          }}
        >
          Hire an AI Workforce, Not Just a Chatbot
        </div>

        {/* Subheadline */}
        <div
          style={{
            fontSize: '22px',
            color: 'rgba(255,255,255,0.55)',
            maxWidth: '680px',
            lineHeight: 1.5,
            fontWeight: 400,
            marginBottom: '40px',
          }}
        >
          Deploy specialized AI Agents that collaborate, execute workflows, and deliver results 24/7 — at any scale.
        </div>

        {/* Feature pills */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {['Multi-Agent Collaboration', 'Workflow Automation', 'SOC2 Compliant', 'No Code Required'].map((f) => (
            <div
              key={f}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                padding: '8px 16px',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '13px',
                fontWeight: 500,
              }}
            >
              {f}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
