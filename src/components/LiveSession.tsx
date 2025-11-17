import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingCart, Check, X } from "lucide-react";

export interface FrameDef {
  id: string;
  name: string;
  accent: string;
  preview: string;
  icon?: string;
  unlockAt: number;
  shape?: "square" | "rounded" | "circle";
  borderType?: "solid" | "double" | "glow";
}

const frameOptions: FrameDef[] = [
  {
    id: "neon-minimal",
    name: "Neon Minimal",
    accent: "from-pink-500 to-pink-300",
    preview:
      "border-4 border-pink-400 rounded-xl shadow-[0_0_25px_rgba(255,0,150,0.9)]",
    icon: "💖",
    unlockAt: 0,
  },
  {
    id: "blossom-bloom",
    name: "Blossom Bloom",
    accent: "from-rose-400 to-pink-200",
    preview:
      "border-[6px] border-rose-300 rounded-2xl shadow-[0_4px_20px_rgba(255,150,180,0.8)]",
    icon: "🌸", // 🌸 Blossom
    unlockAt: 50,
  },
  {
    id: "forest-glow",
    name: "Forest Glow",
    accent: "from-green-400 to-green-200",
    preview:
      "border-[5px] border-green-400 rounded-xl shadow-[0_0_24px_rgba(0,255,120,0.7)]",
    icon: "🌿", // 🌿 leaf
    unlockAt: 100,
  },
  {
    id: "retro-vhs",
    name: "Retro VHS",
    accent: "from-purple-400 to-fuchsia-300",
    preview:
      "border-[5px] border-fuchsia-400 border-double shadow-[0_0_18px_rgba(180,0,255,0.8)]",
    icon: "📼", // retro VHS tape icon
    unlockAt: 200,
  },
  {
    id: "gold-plaque",
    name: "Gold Plaque",
    accent: "from-yellow-400 to-yellow-200",
    preview:
      "border-[6px] border-yellow-400 rounded-xl shadow-[0_0_30px_rgba(255,220,0,1)]",
    icon: "🏆", // trophy
    unlockAt: 500,
  },
  {
    id: "cosmic-galaxy",
    name: "Cosmic Galaxy",
    accent: "from-indigo-400 to-purple-300",
    preview:
      "border-[6px] border-indigo-500 rounded-3xl shadow-[0_0_40px_rgba(160,80,255,0.95)]",
    icon: "🌌", // galaxy icon
    unlockAt: 1000,
  },
];

const SKEY = {
  LOVE: "live-love-count",
  OWNED: "live-owned-frames",
  ACTIVE: "live-active-frame",
};

export default function LiveSession() {
  // session-persistent states
  const [loveCount, setLoveCount] = useState<number>(() => {
    const raw = sessionStorage.getItem(SKEY.LOVE);
    return raw ? parseInt(raw, 10) : 0;
  });
  const [owned, setOwned] = useState<string[]>(() => {
    const raw = sessionStorage.getItem(SKEY.OWNED);
    return raw ? JSON.parse(raw) : [frameOptions[0].id];
  });

  const [activeFrame, setActiveFrame] = useState<string>(() => {
    return sessionStorage.getItem(SKEY.ACTIVE) || frameOptions[0].id;
  });

  // UI states
  const [burstHearts, setBurstHearts] = useState<
    { id: string; left: number; size: number; text: string }[]
  >([]);

  const [storeOpen, setStoreOpen] = useState(false);

  // Persist to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(SKEY.LOVE, String(loveCount));
  }, [loveCount]);

  useEffect(() => {
    sessionStorage.setItem(SKEY.OWNED, JSON.stringify(owned));
  }, [owned]);

  useEffect(() => {
    sessionStorage.setItem(SKEY.ACTIVE, activeFrame);
  }, [activeFrame]);

  // computed unlocked
  const unlockedFrames = frameOptions
    .filter((f) => loveCount >= f.unlockAt)
    .map((f) => f.id);

  // increment love (clicker)
  function handleLove() {
    setLoveCount((c) => c + 1);

    const newItem = {
      id: String(Date.now()) + Math.random().toString(36).slice(2),
      left: 75 + Math.random() * 10,
      size: 20,
      text: "+1",
    };

    setBurstHearts((prev) => [...prev, newItem]);

    setTimeout(() => {
      setBurstHearts((prev) => prev.filter((h) => h.id !== newItem.id));
    }, 1000);
  }

  // claim the unlocked frame (store "buy" free)
  function claimFrame(frameId: string) {
    if (owned.includes(frameId)) return;
    if (!unlockedFrames.includes(frameId)) return;
    setOwned((o) => [...o, frameId]);
  }

  // quick UI helpers
  function isUnlocked(frameId: string) {
    return unlockedFrames.includes(frameId);
  }
  function isOwned(frameId: string) {
    return owned.includes(frameId);
  }

  useEffect(() => {
    if ([50, 100, 200, 500, 1000].includes(loveCount)) {
      setBurstHearts((prev) => [
        ...prev,
        {
          id: `conf-${Date.now()}`,
          left: 50,
          size: 30,
          text: "🎉New Frame Unlocked!", // <--- boleh diganti apa aja
        },
      ]);

      setTimeout(() => {
        setBurstHearts((prev) => prev.filter((h) => !h.id.startsWith("conf-")));
      }, 1200);
    }
  }, [loveCount]);

  // Active frame details
  const activeFrameDef =
    frameOptions.find((f) => f.id === activeFrame) || frameOptions[0];

  return (
    <div className="w-full max-w-screen-2xl mx-auto p-6">
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text pb-3 text-transparent mb-6 text-center">
        NOW LIVE! APFITA 2025
      </h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT: FRAME SWITCHER */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="rounded-2xl p-3 bg-slate-900/60 border border-white/6 shadow-lg">
            <h3 className="text-sm font-semibold text-white/90 mb-3">Frames</h3>

            <div className="flex flex-col gap-3">
              {frameOptions.map((f) => {
                const unlocked = isUnlocked(f.id);
                const ownedFlag = isOwned(f.id);
                return (
                  <div
                    key={f.id}
                    className={`flex items-center gap-3 p-2 rounded-lg ${
                      activeFrame === f.id ? "ring-2 ring-white/20" : ""
                    }`}
                  >
                    <div
                      className={`w-16 h-12 rounded-md overflow-hidden flex-shrink-0 
            border border-white/10 shadow-inner shadow-black/40
            hover:scale-105 transition-transform ${f.preview}`}
                    />
                    <div className="flex-1 text-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-white/90">
                            {f.name}
                          </div>
                          <div className="text-xs text-white/50">
                            Unlock @ {f.unlockAt} 💖
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          {ownedFlag ? (
                            <button
                              onClick={() => setActiveFrame(f.id)}
                              className="text-xs px-2 py-1 rounded-full bg-white/6 hover:bg-white/10 transition"
                            >
                              Equip
                            </button>
                          ) : unlocked ? (
                            <button
                              onClick={() => claimFrame(f.id)}
                              className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 transition"
                              title="Claim this unlocked frame"
                            >
                              <Check className="inline w-4 h-4 mr-1" />
                              Claim
                            </button>
                          ) : (
                            <div className="text-xs text-white/40">Locked</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-between text-md text-white/50">
              <div>Love</div>
              <div className="font-semibold text-white/90">{loveCount}</div>
            </div>

            <div className="mt-3 flex gap-2">
              <button
                onClick={() => setStoreOpen((s) => !s)}
                className="flex-1 px-3 py-2 rounded-md bg-indigo-600/20 hover:bg-indigo-600/30 text-sm transition flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Store
              </button>

              <button
                onClick={() => {
                  // reset session (debug)
                  sessionStorage.removeItem(SKEY.LOVE);
                  sessionStorage.removeItem(SKEY.OWNED);
                  sessionStorage.removeItem(SKEY.ACTIVE);
                  setLoveCount(0);
                  setOwned(["frame-default"]);
                  setActiveFrame("frame-default");
                }}
                className="px-3 py-2 rounded-md bg-white/6 hover:bg-white/10 text-sm"
                title="Reset (debug)"
              >
                Reset
              </button>
            </div>
          </div>

          {/* STORE PANEL */}
          <AnimatePresence>
            {storeOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="mt-3 rounded-2xl p-3 bg-slate-900/60 border border-white/6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-semibold text-white/90">
                    Frame Store
                  </div>
                  <button
                    onClick={() => setStoreOpen(false)}
                    className="text-white/40 hover:text-white/60"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-xs text-white/60 mb-2">
                  Claim unlocked frames here. This is frontend-only — no
                  backend.
                </div>

                <div className="flex flex-col gap-2">
                  {frameOptions.map((f) => {
                    const unlocked = isUnlocked(f.id);
                    const ownedFlag = isOwned(f.id);
                    return (
                      <div
                        key={f.id}
                        className="flex items-center justify-between gap-2 p-2 rounded-md bg-white/3"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-8 rounded-sm border border-white/6 ${f.preview}`}
                          />
                          <div>
                            <div className="text-sm text-white/90">
                              {f.name}
                            </div>
                            <div className="text-xs text-white/50">
                              Unlocks at {f.unlockAt} love
                            </div>
                          </div>
                        </div>

                        <div>
                          {ownedFlag ? (
                            <div className="text-xs text-emerald-300 font-medium">
                              Owned
                            </div>
                          ) : unlocked ? (
                            <button
                              onClick={() => claimFrame(f.id)}
                              className="px-3 py-1 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 text-sm"
                            >
                              Claim
                            </button>
                          ) : (
                            <div className="text-xs text-white/40">Locked</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </aside>

        {/* RIGHT: Live Frame + Video + Controls */}
        <main className="flex-1 w-full">
          <div
            className={`relative rounded-3xl overflow-hidden border border-white/6 shadow-xl ${activeFrameDef.preview}`}
          >
            {/* decorative top bar like youtube */}
            <div
              className={`absolute top-0 left-0 right-0 h-10 flex items-center gap-3 px-4 bg-black/40 border-b border-white/6`}
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>

              <div className="ml-2 text-xs text-white/50 animate-pulse">
                LIVE
              </div>

              <div className="ml-auto text-xs text-white/40">
                {activeFrameDef.name}
              </div>
            </div>

            {/* video container */}
            <div className="w-full aspect-video bg-black/80 flex items-center justify-center">
              {/* Replace with your video player; using iframe for demo */}
              <iframe
                title="live-sample"
                className="w-full h-full"
                src={`https://www.youtube.com/embed/ub5Ysz4yKUM?autoplay=1&mute=0&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />

              {/* Floating LOVE button */}
              <motion.button
                onClick={handleLove}
                whileTap={{ scale: 0.85 }}
                className="absolute bottom-6 right-6 px-8 py-3 rounded-full bg-pink-500 text-white font-bold shadow-lg flex items-center gap-2"
              >
                <Heart className="w-6 h-6" />
                LOVE!
              </motion.button>
            </div>

            {/* controls overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              {/* right: store quick / equip */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setStoreOpen((s) => !s)}
                  className="px-3 py-2 rounded-full bg-white/6 hover:bg-white/10"
                >
                  <ShoppingCart className="w-4 h-4" />
                </button>

                {isOwned(activeFrame) ? (
                  <div className="text-xs text-emerald-300 font-medium">
                    Equipped
                  </div>
                ) : (
                  <div className="text-xs text-white/50">Not owned</div>
                )}
              </div>
            </div>

            {/* animated heart bursts */}
            <div className="pointer-events-none absolute inset-0 z-[999]">
              <AnimatePresence>
                {burstHearts.map((h) => (
                  <motion.div
                    key={h.id}
                    initial={{ opacity: 0, y: 0, scale: 0.8 }}
                    animate={{ opacity: 1, y: -50, scale: 1 }}
                    exit={{ opacity: 0, y: -80 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                      position: "absolute",
                      left: `${h.left}%`,
                      bottom: "80px",
                      color: "#ffd84d",
                      fontWeight: "bold",
                      fontSize: "20px",
                      textShadow: "0 0 6px rgba(255,120,160,0.8)",
                    }}
                  >
                    {h.text}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* below: progress / CTA */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex-1 pr-4">
              <div className="text-xs text-white/60 mb-2">
                Progress to next unlock:
              </div>
              <div className="w-full bg-white/6 h-3 rounded-full overflow-hidden">
                {/* compute next threshold */}
                {(() => {
                  const unlockedIds = unlockedFrames;
                  const remaining = frameOptions.filter(
                    (f) => !unlockedIds.includes(f.id)
                  );
                  const next =
                    remaining[0] || frameOptions[frameOptions.length - 1];
                  const prevThreshold =
                    frameOptions
                      .slice()
                      .reverse()
                      .find((f) => unlockedIds.includes(f.id))?.unlockAt || 0;
                  const pct =
                    next.unlockAt === prevThreshold
                      ? 1
                      : Math.min(
                          1,
                          (loveCount - prevThreshold) /
                            Math.max(1, next.unlockAt - prevThreshold)
                        );
                  return (
                    <div
                      className={`h-3 bg-gradient-to-r ${activeFrameDef.accent}`}
                      style={{ width: `${pct * 100}%` }}
                    />
                  );
                })()}
              </div>
            </div>

            <div className="w-52 text-right">
              <div className="text-xs text-white/50">
                Next:{" "}
                {frameOptions.find((f) => !unlockedFrames.includes(f.id))
                  ?.name || "All unlocked"}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* small footer */}
      <div className="mt-6 text-xs text-white/50">
        Tip: Click the <span className="font-semibold">Love</span> button fast
        to unlock frames — everything stored in this browser session only.
      </div>
    </div>
  );
}
