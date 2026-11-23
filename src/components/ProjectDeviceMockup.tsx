import { motion } from "framer-motion";

type ProjectDeviceMockupProps = {
  desktopImage: string;
  desktopAlt: string;
  demoUrlLabel?: string;
  mobileImage?: string;
  mobileAlt?: string;
  showMobile: boolean;
  mobileCaption?: string;
};

export function ProjectDeviceMockup({
  desktopImage,
  desktopAlt,
  demoUrlLabel,
  mobileImage,
  mobileAlt,
  showMobile,
  mobileCaption = "Responsive storefront (visit demo on a phone to verify)",
}: ProjectDeviceMockupProps) {
  const phoneSrc = mobileImage ?? desktopImage;
  const phoneAlt = mobileAlt ?? `${desktopAlt} — layout reference from portfolio screenshot`;

  return (
    <div className="w-full min-w-0 max-w-full">
      <motion.div
        className="relative mx-auto w-full min-w-0 overflow-x-clip"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="device-browser w-full min-w-0 overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-neutral-700/80"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.35 }}
        >
          <div className="device-browser-bar" aria-hidden>
            <div className="flex shrink-0 gap-1.5">
              <span className="device-browser-dot bg-red-500/80" />
              <span className="device-browser-dot bg-amber-400/80" />
              <span className="device-browser-dot bg-emerald-500/80" />
            </div>
            <div className="device-browser-url min-w-0">{demoUrlLabel ?? "Preview — not publicly deployed"}</div>
          </div>
          <div className="relative aspect-[4/3] w-full bg-neutral-900 sm:aspect-[16/10]">
            <img
              src={desktopImage}
              alt={desktopAlt}
              className="h-full w-full max-w-full object-cover object-top"
              loading="lazy"
              decoding="async"
              width={1280}
              height={800}
            />
          </div>
        </motion.div>

        {showMobile ? (
          <motion.div
            className="mt-6 flex w-full max-w-full justify-center lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-[34%] lg:max-w-[220px] xl:-right-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <div className="w-full max-w-[200px] min-w-0">
              <div className="device-phone w-full">
                <div className="device-phone-notch" aria-hidden />
                <div className="device-phone-screen">
                  <img
                    src={phoneSrc}
                    alt={phoneAlt}
                    className="h-full w-full max-w-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                    width={390}
                    height={844}
                  />
                </div>
              </div>
              <p className="mt-2 text-center text-[10px] leading-snug text-neutral-500 sm:text-xs">{mobileCaption}</p>
            </div>
          </motion.div>
        ) : null}
      </motion.div>
    </div>
  );
}