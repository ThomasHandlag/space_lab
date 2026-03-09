import { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars, AdaptiveDpr } from "@react-three/drei";
import type { Group, Mesh, BufferGeometry, NormalBufferAttributes } from "three";

type CrystalPalette = {
    core: string;
    accent: string;
    glow: string;
    lightning: string;
    flash: string;
};

const crystalPalettes: CrystalPalette[] = [
    { core: "#75E8FF", accent: "#B2F5FF", glow: "#22D3EE", lightning: "#F0FEFF", flash: "#67E8F9" },
    { core: "#A6FF7A", accent: "#D9FFC6", glow: "#4ADE80", lightning: "#ECFCCB", flash: "#86EFAC" },
    { core: "#FFC56B", accent: "#FFE3BA", glow: "#F59E0B", lightning: "#FEF3C7", flash: "#FBBF24" },
    { core: "#FF6BAA", accent: "#FFC2DD", glow: "#FB7185", lightning: "#FFE4E6", flash: "#FDA4AF" },
    { core: "#9CA8FF", accent: "#CFD4FF", glow: "#818CF8", lightning: "#E0E7FF", flash: "#A5B4FC" },
    { core: "#B18DFF", accent: "#E0D4FF", glow: "#A855F7", lightning: "#F3E8FF", flash: "#D8B4FE" },
];

function useResponsiveScale() {
    const { viewport } = useThree();
    const scale = Math.min(viewport.width, viewport.height) / 6;
    return Math.max(0.5, Math.min(scale, 1.2));
}

function CrystalCluster({ palette, pulse }: { palette: CrystalPalette; pulse: number }) {
    const groupRef = useRef<Group>(null);
    const coreRef = useRef<Mesh>(null);

    const shardLayout = useMemo(
        () => [
            { position: [0, 0.8, 0] as [number, number, number], scale: [0.7, 1.9, 0.7] as [number, number, number], rot: [0.1, 0.1, 0.2] as [number, number, number] },
            { position: [1.1, -0.1, 0.4] as [number, number, number], scale: [0.55, 1.35, 0.55] as [number, number, number], rot: [0.3, 0.5, -0.2] as [number, number, number] },
            { position: [-1.05, -0.15, -0.35] as [number, number, number], scale: [0.6, 1.4, 0.6] as [number, number, number], rot: [-0.25, -0.4, 0.15] as [number, number, number] },
            { position: [0.5, -1.1, -0.8] as [number, number, number], scale: [0.45, 1.05, 0.45] as [number, number, number], rot: [0.5, -0.2, 0.5] as [number, number, number] },
            { position: [-0.55, -1.05, 0.85] as [number, number, number], scale: [0.4, 0.95, 0.4] as [number, number, number], rot: [-0.5, 0.35, -0.45] as [number, number, number] },
            { position: [0.05, -0.65, 1.25] as [number, number, number], scale: [0.32, 0.88, 0.32] as [number, number, number], rot: [0.2, 0.8, -0.1] as [number, number, number] },
            { position: [-0.05, -0.6, -1.2] as [number, number, number], scale: [0.3, 0.82, 0.3] as [number, number, number], rot: [-0.2, -0.8, 0.1] as [number, number, number] },
        ],
        []
    );

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = t * 0.12;
            groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
            groupRef.current.position.y = Math.sin(t * 0.6) * 0.12;
        }
        if (coreRef.current) {
            coreRef.current.scale.setScalar(0.24 + Math.sin(t * 2.5) * 0.03 + pulse * 0.03);
        }
    });

    const s = useResponsiveScale();

    return (
        <Float speed={1.4} rotationIntensity={0.28} floatIntensity={0.95}>
            <group ref={groupRef} scale={2.05 * s}>
                {shardLayout.map((shard, i) => (
                    <mesh
                        key={i}
                        position={shard.position}
                        scale={shard.scale}
                        rotation={shard.rot}
                    >
                        <octahedronGeometry args={[1, 0]} />
                        <meshStandardMaterial
                            color={i % 2 === 0 ? palette.core : palette.accent}
                            emissive={palette.glow}
                            emissiveIntensity={0.95 + pulse * 0.35}
                            roughness={0.16}
                            metalness={0.85}
                            transparent
                            opacity={0.9}
                        />
                    </mesh>
                ))}

                <mesh ref={coreRef}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshStandardMaterial
                        color={palette.accent}
                        emissive={palette.glow}
                        emissiveIntensity={1.6 + pulse * 0.8}
                        roughness={0.2}
                        metalness={0.6}
                        transparent
                        opacity={0.95}
                    />
                </mesh>
            </group>
        </Float>
    );
}

function EnergyRings({ palette, pulse }: { palette: CrystalPalette; pulse: number }) {
    const ringRef = useRef<Mesh>(null);
    const ring2Ref = useRef<Mesh>(null);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (ringRef.current) {
            ringRef.current.rotation.x = t * 0.35;
            ringRef.current.rotation.z = t * 0.15;
        }
        if (ring2Ref.current) {
            ring2Ref.current.rotation.y = -t * 0.22;
            ring2Ref.current.rotation.z = t * 0.11;
        }
    });

    const s = useResponsiveScale();

    return (
        <>
            <mesh ref={ringRef} scale={s}>
                <torusGeometry args={[3.1, 0.05, 20, 120]} />
                <meshStandardMaterial color={palette.accent} emissive={palette.glow} emissiveIntensity={0.85 + pulse * 0.5} transparent opacity={0.7} />
            </mesh>
            <mesh ref={ring2Ref} scale={s * 0.88} rotation={[Math.PI / 3, 0, Math.PI / 5]}>
                <torusGeometry args={[2.65, 0.03, 14, 100]} />
                <meshStandardMaterial color={palette.core} emissive={palette.glow} emissiveIntensity={0.55 + pulse * 0.3} transparent opacity={0.62} />
            </mesh>
        </>
    );
}

function FloatingParticles({ count = 60, palette }: { count?: number; palette: CrystalPalette }) {
    const groupRef = useRef<Group>(null);
    const s = useResponsiveScale();

    const particles = useMemo(() => {
        const temp: { position: [number, number, number]; scale: number }[] = [];
        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 3 + Math.random() * 2.5;
            temp.push({
                position: [
                    r * Math.sin(phi) * Math.cos(theta),
                    r * Math.sin(phi) * Math.sin(theta),
                    r * Math.cos(phi),
                ],
                scale: 0.02 + Math.random() * 0.04,
            });
        }
        return temp;
    }, [count]);

    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
            groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.1;
        }
    });

    return (
        <group ref={groupRef} scale={s}>
            {particles.map((p, i) => (
                <mesh key={i} position={p.position} scale={p.scale}>
                    <sphereGeometry args={[1, 8, 8]} />
                    <meshStandardMaterial
                        color={i % 3 === 0 ? palette.core : i % 3 === 1 ? palette.accent : "#ffffff"}
                        emissive={palette.glow}
                        emissiveIntensity={0.8}
                    />
                </mesh>
            ))}
        </group>
    );
}

function SmallShape({ position, color, speed, pulse }: { position: [number, number, number]; color: string; speed: number; pulse: number }) {
    const meshRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>>>(null);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = clock.getElapsedTime() * speed;
            meshRef.current.rotation.y = clock.getElapsedTime() * speed * 0.7;
        }
    });

    const s = useResponsiveScale();

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} position={position.map(v => v * s) as [number, number, number]} scale={0.35 * s}>
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35 + pulse * 0.18} roughness={0.25} metalness={0.75} />
            </mesh>
        </Float>
    );
}

function LightningBolts({ trigger, color }: { trigger: number; color: string }) {
    const [active, setActive] = useState(false);

    const bolts = useMemo(() => {
        return Array.from({ length: 7 }).map((_, index) => {
            const points: [number, number, number][] = [];
            const xStart = -2.7 + index * 0.9;
            const z = -0.35 + Math.random() * 0.7;
            const steps = 8;
            for (let i = 0; i <= steps; i++) {
                const progress = i / steps;
                points.push([
                    xStart + (Math.random() - 0.5) * 0.7,
                    4.4 - progress * 8.8,
                    z + (Math.random() - 0.5) * 0.4,
                ]);
            }
            return points;
        });
    }, [trigger]);

    useEffect(() => {
        if (trigger === 0) {
            return;
        }
        setActive(true);
        const timeout = window.setTimeout(() => setActive(false), 420);
        return () => window.clearTimeout(timeout);
    }, [trigger]);

    if (!active) {
        return null;
    }

    return (
        <group scale={[1.35, 1.35, 1.35]}>
            {bolts.map((bolt, i) => (
                <line key={i}>
                    <bufferGeometry>
                        <bufferAttribute attach="attributes-position" args={[new Float32Array(bolt.flat()), 3]} />
                    </bufferGeometry>
                    <lineBasicMaterial color={color} transparent opacity={0.92} />
                </line>
            ))}
        </group>
    );
}

function Scene({
    particleCount,
    starCount,
    palette,
    lightningTrigger,
    pulse,
}: {
    particleCount: number;
    starCount: number;
    palette: CrystalPalette;
    lightningTrigger: number;
    pulse: number;
}) {
    return (
        <>
            <ambientLight intensity={0.34} color={palette.accent} />
            <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
            <pointLight position={[-5, -3, -5]} intensity={0.65 + pulse * 0.25} color={palette.core} />
            <pointLight position={[3, 4, -3]} intensity={0.6 + pulse * 0.2} color={palette.glow} />
            <pointLight position={[0, 2.2, 1.2]} intensity={0.35 + pulse * 0.8} color={palette.lightning} />

            <CrystalCluster palette={palette} pulse={pulse} />
            <EnergyRings palette={palette} pulse={pulse} />
            <FloatingParticles count={particleCount} palette={palette} />
            <LightningBolts trigger={lightningTrigger} color={palette.lightning} />

            <SmallShape position={[3, 2, -1]} color={palette.core} speed={0.8} pulse={pulse} />
            <SmallShape position={[-3, -1.5, 0.5]} color={palette.accent} speed={0.6} pulse={pulse} />
            <SmallShape position={[2, -2.5, 1]} color={palette.glow} speed={1} pulse={pulse} />

            <Stars radius={50} depth={30} count={starCount} factor={3} saturation={0.5} fade speed={0.5} />
        </>
    );
}

function useActiveSectionIndex() {
    const [sectionIndex, setSectionIndex] = useState(0);

    useEffect(() => {
        let raf = 0;

        const updateSection = () => {
            const sections = Array.from(document.querySelectorAll("section"));
            if (sections.length === 0) {
                return;
            }

            const viewportFocus = window.innerHeight * 0.45;
            let bestIndex = 0;
            let bestDistance = Number.POSITIVE_INFINITY;

            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const topDistance = Math.abs(rect.top - viewportFocus);
                const insideViewport = rect.top <= viewportFocus && rect.bottom >= viewportFocus;
                const score = insideViewport ? 0 : topDistance;

                if (score < bestDistance) {
                    bestDistance = score;
                    bestIndex = index;
                }
            });

            setSectionIndex(bestIndex);
        };

        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(updateSection);
        };

        updateSection();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return sectionIndex;
}

function useScreenSize() {
    const [size, setSize] = useState<"sm" | "md" | "lg">("lg");

    const update = useCallback(() => {
        const w = window.innerWidth;
        setSize(w < 640 ? "sm" : w < 1024 ? "md" : "lg");
    }, []);

    useEffect(() => {
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [update]);

    return size;
}

const cameraConfig = {
    sm: { position: [0, 0, 10] as [number, number, number], fov: 45 },
    md: { position: [0, 0, 8] as [number, number, number], fov: 48 },
    lg: { position: [0, 0, 7] as [number, number, number], fov: 50 },
};

const particleCount = { sm: 25, md: 40, lg: 60 };
const starCount = { sm: 300, md: 500, lg: 800 };

export default function HeroScene() {
    const screen = useScreenSize();
    const cam = cameraConfig[screen];
    const sectionIndex = useActiveSectionIndex();
    const [lightningTrigger, setLightningTrigger] = useState(0);
    const [flashLevel, setFlashLevel] = useState(0);
    const [pulseLevel, setPulseLevel] = useState(0);
    const previousSectionRef = useRef(sectionIndex);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const flashTimeoutRef = useRef<number | null>(null);
    const pulseTimeoutRef = useRef<number | null>(null);

    const palette = crystalPalettes[sectionIndex % crystalPalettes.length];

    const triggerLightningPulse = useCallback(() => {
        setLightningTrigger(value => value + 1);
        setFlashLevel(1);
        setPulseLevel(1);

        if (flashTimeoutRef.current !== null) {
            window.clearTimeout(flashTimeoutRef.current);
        }
        if (pulseTimeoutRef.current !== null) {
            window.clearTimeout(pulseTimeoutRef.current);
        }

        flashTimeoutRef.current = window.setTimeout(() => setFlashLevel(0), 320);
        pulseTimeoutRef.current = window.setTimeout(() => setPulseLevel(0), 520);
    }, []);

    useEffect(() => {
        const thunderAudio = new Audio("/thunder.mp3");
        thunderAudio.preload = "auto";
        thunderAudio.volume = 0.8;
        audioRef.current = thunderAudio;

        const playOnLoad = () => {
            void thunderAudio.play().catch(() => {
                // Ignore autoplay rejection; fallback handlers cover first interaction.
            });
        };

        playOnLoad();
        window.addEventListener("pointerdown", playOnLoad, { once: true });
        window.addEventListener("keydown", playOnLoad, { once: true });

        return () => {
            window.removeEventListener("pointerdown", playOnLoad);
            window.removeEventListener("keydown", playOnLoad);
            thunderAudio.pause();
            thunderAudio.currentTime = 0;
            audioRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (previousSectionRef.current === sectionIndex) {
            return;
        }

        previousSectionRef.current = sectionIndex;
        triggerLightningPulse();
    }, [sectionIndex, triggerLightningPulse]);

    useEffect(() => {
        const interval = window.setInterval(() => {
            triggerLightningPulse();
        }, 5000);

        return () => window.clearInterval(interval);
    }, [triggerLightningPulse]);

    useEffect(() => {
        return () => {
            if (flashTimeoutRef.current !== null) {
                window.clearTimeout(flashTimeoutRef.current);
            }
            if (pulseTimeoutRef.current !== null) {
                window.clearTimeout(pulseTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div className="w-full h-full relative">
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                    opacity: flashLevel * 0.65,
                    background: `radial-gradient(circle at 50% 45%, ${palette.flash}66 0%, transparent 62%)`,
                    mixBlendMode: "screen",
                }}
            />
            <Canvas
                camera={{ position: cam.position, fov: cam.fov }}
                gl={{ antialias: screen !== "sm", alpha: true }}
                dpr={[1, screen === "sm" ? 1.5 : 2]}
                style={{ background: "transparent" }}
            >
                <AdaptiveDpr pixelated />
                <Scene
                    particleCount={particleCount[screen]}
                    starCount={starCount[screen]}
                    palette={palette}
                    lightningTrigger={lightningTrigger}
                    pulse={pulseLevel}
                />
            </Canvas>
        </div>
    );
}
