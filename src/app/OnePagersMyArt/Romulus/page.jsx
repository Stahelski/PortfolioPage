"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Press_Start_2P } from "next/font/google";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const rows = [
  {
    id: "R-0001",
    vessel: "VLCC Romulus Alpha",
    length: 333,
    width: 60,
    beam: 58,
    draft: 22.5,
    dwt: 320000,
    bhp: 45000,
    bp: 180,
    clazz: "ABS A1",
    location: "Keppel, SG",
    price: "$98.4M",
  },
  {
    id: "R-0002",
    vessel: "Suezmax Orion",
    length: 274,
    width: 50,
    beam: 48,
    draft: 17.1,
    dwt: 160000,
    bhp: 28000,
    bp: 150,
    clazz: "LR Class",
    location: "Ras Tanura, SA",
    price: "$61.0M",
  },
  {
    id: "R-0003",
    vessel: "Aframax Helios",
    length: 245,
    width: 44,
    beam: 42,
    draft: 14.8,
    dwt: 115000,
    bhp: 22000,
    bp: 130,
    clazz: "DNV",
    location: "Fujairah, AE",
    price: "$48.9M",
  },
  {
    id: "R-0004",
    vessel: "Panamax Vega",
    length: 228,
    width: 32,
    beam: 32,
    draft: 13.5,
    dwt: 75000,
    bhp: 18000,
    bp: 110,
    clazz: "BV",
    location: "Piraeus, GR",
    price: "$34.2M",
  },
  {
    id: "R-0005",
    vessel: "Handysize Nova",
    length: 180,
    width: 28,
    beam: 27,
    draft: 10.8,
    dwt: 40000,
    bhp: 12500,
    bp: 90,
    clazz: "RINA",
    location: "Busan, KR",
    price: "$22.7M",
  },
  {
    id: "R-0006",
    vessel: "VLCC Titan",
    length: 339,
    width: 60,
    beam: 60,
    draft: 23.2,
    dwt: 330000,
    bhp: 47000,
    bp: 185,
    clazz: "ABS A1",
    location: "Dalian, CN",
    price: "$101.1M",
  },
  {
    id: "R-0007",
    vessel: "Suezmax Atlas",
    length: 276,
    width: 48,
    beam: 47,
    draft: 17.3,
    dwt: 158000,
    bhp: 28500,
    bp: 152,
    clazz: "LR Class",
    location: "Rotterdam, NL",
    price: "$60.2M",
  },
  {
    id: "R-0008",
    vessel: "Aframax Borealis",
    length: 248,
    width: 44,
    beam: 43,
    draft: 15.0,
    dwt: 118000,
    bhp: 22500,
    bp: 132,
    clazz: "DNV",
    location: "Houston, US",
    price: "$49.7M",
  },
  {
    id: "R-0009",
    vessel: "Panamax Sirius",
    length: 225,
    width: 32,
    beam: 31,
    draft: 13.2,
    dwt: 73000,
    bhp: 17500,
    bp: 108,
    clazz: "BV",
    location: "Qingdao, CN",
    price: "$33.0M",
  },
  {
    id: "R-0010",
    vessel: "Handysize Lyra",
    length: 176,
    width: 27,
    beam: 26,
    draft: 10.4,
    dwt: 38000,
    bhp: 12000,
    bp: 88,
    clazz: "RINA",
    location: "Chiba, JP",
    price: "$21.5M",
  },
  {
    id: "R-0011",
    vessel: "Shuttle Draco",
    length: 260,
    width: 46,
    beam: 45,
    draft: 16.2,
    dwt: 140000,
    bhp: 30000,
    bp: 160,
    clazz: "ABS A1",
    location: "Stavanger, NO",
    price: "$57.3M",
  },
  {
    id: "R-0012",
    vessel: "ULCC Colossus",
    length: 415,
    width: 68,
    beam: 68,
    draft: 28.0,
    dwt: 480000,
    bhp: 65000,
    bp: 210,
    clazz: "LR Class",
    location: "Chattogram, BD",
    price: "$142.0M",
  },
  {
    id: "R-0013",
    vessel: "Product Antares",
    length: 185,
    width: 30,
    beam: 29,
    draft: 11.2,
    dwt: 46000,
    bhp: 13500,
    bp: 95,
    clazz: "DNV",
    location: "Gothenburg, SE",
    price: "$26.9M",
  },
  {
    id: "R-0014",
    vessel: "VLCC Nemesis",
    length: 336,
    width: 60,
    beam: 59,
    draft: 23.0,
    dwt: 325000,
    bhp: 46000,
    bp: 182,
    clazz: "ABS A1",
    location: "Kuwait, KW",
    price: "$100.5M",
  },
  {
    id: "R-0015",
    vessel: "Aframax Phoenix",
    length: 247,
    width: 44,
    beam: 42,
    draft: 14.9,
    dwt: 116000,
    bhp: 22300,
    bp: 131,
    clazz: "BV",
    location: "Algeciras, ES",
    price: "$49.1M",
  },
];

export default function Page() {
  const threeContainerRef = useRef(null);

  useEffect(() => {
    if (!threeContainerRef.current) return;

    let animationFrameId;
    let scene, camera, renderer, ship, stars;
    let mouseX = 0;
    let mouseY = 0;

    const neonGreen = 0x00ff00;
    const darkGreen = 0x004400;

    const container = threeContainerRef.current;

    function createPixelBox(parent, x, y, z, width, height, depth, material) {
      const geometry = new THREE.BoxGeometry(width, height, depth);
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      parent.add(mesh);
    }

    function createRomulusShip() {
      ship = new THREE.Group();

      const pixelMaterial = new THREE.MeshLambertMaterial({
        color: neonGreen,
        emissive: darkGreen,
        emissiveIntensity: 0.5,
      });

      const darkPixelMaterial = new THREE.MeshLambertMaterial({
        color: darkGreen,
        emissive: 0x001100,
        emissiveIntensity: 0.3,
      });

      // Main hull
      createPixelBox(ship, 0, 0, 0, 12, 2, 4, pixelMaterial);
      createPixelBox(ship, 0, -1, 0, 10, 1, 3, darkPixelMaterial);

      // Front section
      createPixelBox(ship, 6, 0, 0, 2, 1, 2, pixelMaterial);
      createPixelBox(ship, 8, 0, 0, 1, 1, 1, pixelMaterial);

      // Mining equipment/arms
      createPixelBox(ship, -4, 1, 2, 6, 1, 1, pixelMaterial);
      createPixelBox(ship, -4, 1, -2, 6, 1, 1, pixelMaterial);
      createPixelBox(ship, -6, 2, 2, 2, 1, 1, darkPixelMaterial);
      createPixelBox(ship, -6, 2, -2, 2, 1, 1, darkPixelMaterial);

      // Engine section
      createPixelBox(ship, -7, 0, 0, 3, 3, 3, darkPixelMaterial);
      createPixelBox(ship, -8, 0, 1, 1, 1, 1, pixelMaterial);
      createPixelBox(ship, -8, 0, -1, 1, 1, 1, pixelMaterial);
      createPixelBox(ship, -8, 1, 0, 1, 1, 1, pixelMaterial);

      // Side thrusters
      createPixelBox(ship, -5, 0, 3, 2, 1, 1, pixelMaterial);
      createPixelBox(ship, -5, 0, -3, 2, 1, 1, pixelMaterial);

      // Command section/bridge
      createPixelBox(ship, 2, 2, 0, 3, 1, 2, pixelMaterial);
      createPixelBox(ship, 1, 3, 0, 2, 1, 1, darkPixelMaterial);

      // Industrial details
      createPixelBox(ship, 0, -2, 1, 8, 1, 1, darkPixelMaterial);
      createPixelBox(ship, 0, -2, -1, 8, 1, 1, darkPixelMaterial);

      // Cargo containers
      createPixelBox(ship, -2, 1, 0, 2, 2, 1, darkPixelMaterial);
      createPixelBox(ship, 1, 1, 1, 1, 1, 1, pixelMaterial);
      createPixelBox(ship, 1, 1, -1, 1, 1, 1, pixelMaterial);

      scene.add(ship);
    }

    function createStars() {
      const starsGeometry = new THREE.BufferGeometry();
      const starsMaterial = new THREE.PointsMaterial({
        color: 0x888888,
        size: 2,
        sizeAttenuation: false,
      });

      const starsVertices = [];
      for (let i = 0; i < 1000; i++) {
        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 200;
        const z = (Math.random() - 0.5) * 200;
        starsVertices.push(x, y, z);
      }

      starsGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(starsVertices, 3)
      );
      stars = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(stars);
    }

    function onMouseMove(event) {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / rect.width) * 2 - 1;
      mouseY = -(y / rect.height) * 2 + 1;
    }

    function onWheel(event) {
      event.preventDefault();
      camera.position.z += event.deltaY * 0.01;
      camera.position.z = Math.max(5, Math.min(50, camera.position.z));
    }

    function onWindowResize() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    function init() {
      const width = container.clientWidth;
      const height = container.clientHeight;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000011);

      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.set(0, 5, 15);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);

      createRomulusShip();
      createStars();

      const ambientLight = new THREE.AmbientLight(0x002200, 0.3);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(neonGreen, 2, 100);
      pointLight.position.set(0, 10, 10);
      pointLight.castShadow = true;
      scene.add(pointLight);

      container.addEventListener("mousemove", onMouseMove, { passive: true });
      container.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("resize", onWindowResize);
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate ship slowly
      if (ship) {
        ship.rotation.y += 0.005;
        ship.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;
      }

      // Camera movement based on mouse
      camera.position.x = mouseX * 5;
      camera.position.y = mouseY * 5 + 5;
      camera.lookAt(ship ? ship.position : new THREE.Vector3());

      // Rotate stars
      if (stars) {
        stars.rotation.y += 0.0005;
      }

      // Pulsing glow effect
      const time = Date.now() * 0.003;
      if (ship) {
        ship.children.forEach((child, index) => {
          if (
            child.material &&
            child.material.emissiveIntensity !== undefined
          ) {
            child.material.emissiveIntensity =
              0.3 + Math.sin(time + index * 0.5) * 0.2;
          }
        });
      }

      renderer.render(scene, camera);
    }

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onWindowResize);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("wheel", onWheel);
      if (renderer) {
        renderer.dispose();
        if (
          renderer.domElement &&
          renderer.domElement.parentNode === container
        ) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-green-400 overflow-x-hidden">
      <header
        className={`sticky top-0 z-50 border-b border-green-800 bg-black/90 backdrop-blur ${pressStart.className}`}
      >
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            <div className="pixel-logo" aria-label="Romulus logo" />
            <span className="text-[10px] tracking-widest">ROMULUS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-[10px]">
            <a className="opacity-80 hover:opacity-100" href="#">
              FLEET
            </a>
            <a className="opacity-80 hover:opacity-100" href="#">
              LAUNCHES
            </a>
            <a className="opacity-80 hover:opacity-100" href="#">
              ABOUT
            </a>
          </nav>
        </div>
      </header>

      <section
        className={`sticky top-16 z-40 px-4 py-3 bg-transparent ${pressStart.className}`}
      >
        <h1 className="text-[10px] md:text-sm leading-tight max-w-[24ch]">
          The road to making life multiplanetary
        </h1>
      </section>

      <section className="relative">
        <div
          ref={threeContainerRef}
          className="three-viewport sticky bottom-0 z-10 w-full h-[40vh]"
        />
      </section>

      <section className="relative z-20">
        <div className="px-4 py-6">
          <div className="overflow-x-auto rounded border border-green-900">
            <table className="min-w-full text-[10px]">
              <thead className="bg-black/80 backdrop-blur sticky top-0 z-10">
                <tr className="text-left">
                  <th className="px-3 py-2 border-b border-green-900/60">
                    ID number
                  </th>
                  <th className="px-3 py-2 border-b border-green-900/60">
                    Vessel Type/name
                  </th>
                  <th className="px-3 py-2 border-b border-green-900/60">
                    Length (m)
                  </th>
                  <th className="px-3 py-2 border-b border-green-900/60">
                    Width (m)
                  </th>
                  <th className="px-3 py-2 border-b border-green-900/60">
                    Beam (m)
                  </th>
                  <th className="px-3 py-2 border-b border-green-900/60">
                    Draft (m)
                  </th>
                  <th className="px-3 py-2 border-b border-green-900/60">
                    DWT
                  </th>
                  <th className="px-3 py-2 border-b border-green-900/60">
                    BHP
                  </th>
                  <th className="px-3 py-2 border-b border-green-900/60">BP</th>
                  <th className="px-3 py-2 border-b border-green-900/60">
                    Class
                  </th>
                  <th className="px-3 py-2 border-b border-green-900/60">
                    Location
                  </th>
                  <th className="px-3 py-2 border-b border-green-900/60">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green-900/40">
                {rows.map((r) => (
                  <tr key={r.id} className="hover:bg-green-900/10">
                    <td className="px-3 py-2 whitespace-nowrap">{r.id}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.vessel}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.length}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.width}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.beam}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.draft}</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {r.dwt.toLocaleString()}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {r.bhp.toLocaleString()}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.bp}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.clazz}</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {r.location}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <style jsx>{`
        .pixel-logo {
          width: 18px;
          height: 18px;
          image-rendering: pixelated;
          background: #00ff00;
          box-shadow: 0 0 0 2px #003b00 inset, 4px 0 0 0 #00ff00,
            8px 0 0 0 #00ff00, 8px 4px 0 0 #00ff00, 8px 8px 0 0 #00ff00,
            4px 8px 0 0 #00ff00, 0 8px 0 0 #00ff00, 0 4px 0 0 #00ff00,
            4px 4px 0 0 #003b00 inset;
        }

        .ship-viewport {
          background: linear-gradient(to top, #000 30%, #020617 100%);
        }

        .three-viewport {
          background: linear-gradient(to top, #000 30%, #020617 100%);
          overflow: hidden;
        }

        .ship {
          --px: 8px;
          position: relative;
          width: calc(var(--px) * 10);
          height: calc(var(--px) * 12);
          margin-bottom: calc(var(--px) * 1);
          filter: drop-shadow(0 8px 16px rgba(0, 255, 0, 0.15));
          animation: float 6s ease-in-out infinite;
        }
        .ship::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          width: var(--px);
          height: var(--px);
          transform: translateX(-50%);
          background: #00ff00;
          box-shadow: 0 1px #00ff00, 0 2px #00ff00, 0 3px #00ff00,
            -1px 3px #00aa00, 1px 3px #00aa00, -2px 4px #00aa00, 0 4px #00ff00,
            2px 4px #00aa00, -3px 5px #006600, -1px 5px #00aa00, 1px 5px #00aa00,
            3px 5px #006600, -3px 6px #006600, -2px 6px #00ff00,
            -1px 6px #00ff00, 0 6px #00ff00, 1px 6px #00ff00, 2px 6px #00ff00,
            3px 6px #006600, -2px 7px #00aa00, 0 7px #00ff00, 2px 7px #00aa00,
            -1px 8px #00aa00, 0 8px #00ff00, 1px 8px #00aa00, -1px 9px #009900,
            0 9px #00aa00, 1px 9px #009900, -2px 10px #006600, 0 10px #009900,
            2px 10px #006600;
        }
        .ship::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: calc(var(--px) * -2);
          transform: translateX(-50%);
          width: var(--px);
          height: var(--px);
          background: radial-gradient(
            circle,
            rgba(0, 255, 153, 0.9),
            rgba(0, 255, 0, 0)
          );
          box-shadow: 0 0 12px 4px rgba(0, 255, 153, 0.9);
          animation: thrust 0.2s infinite alternate;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        @keyframes thrust {
          from {
            opacity: 0.6;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}
