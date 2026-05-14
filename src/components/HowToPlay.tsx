import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
export function HowToPlay() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="The Flow of Play"
          eyebrow="The Turn"
          align="left" />
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <GlassCard delay={0.1}>
            <h3 className="text-2xl text-kp-gold font-display mb-3">
              Match or Draw
            </h3>
            <p className="text-kp-champagne/80 leading-relaxed">
              Play a card matching the top of the discard pile in{' '}
              <strong className="text-kp-champagne font-medium">suit</strong> or{' '}
              <strong className="text-kp-champagne font-medium">rank</strong>.
              If you cannot, draw one from the pile and pass.
            </p>
          </GlassCard>

          <GlassCard delay={0.2}>
            <h3 className="text-2xl text-kp-gold font-display mb-3">
              The Penalty
            </h3>
            <p className="text-kp-champagne/80 leading-relaxed">
              Play an invalid card and you are penalised.{' '}
              <strong className="text-kp-champagne font-medium">
                Draw one card
              </strong>{' '}
              from the pile, and the turn passes to the next player.
            </p>
          </GlassCard>

          <GlassCard delay={0.3}>
            <h3 className="text-2xl text-kp-gold font-display mb-3">
              The Lead
            </h3>
            <p className="text-kp-champagne/80 leading-relaxed">
              The previous winner — or the dealer in a new game — starts play
              and chooses the{' '}
              <strong className="text-kp-champagne font-medium">
                direction
              </strong>{' '}
              the round will flow.
            </p>
          </GlassCard>

          <GlassCard delay={0.4}>
            <h3 className="text-2xl text-kp-gold font-display mb-3">
              The Refill
            </h3>
            <p className="text-kp-champagne/80 leading-relaxed">
              When the draw pile runs dry, take the discard pile{' '}
              <em>(save the top card)</em>, shuffle, and place it face down as
              the new draw pile.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>);

}