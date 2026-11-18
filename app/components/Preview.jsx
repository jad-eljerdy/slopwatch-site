"use client";
import { useState } from "react";
import { Timer, Wifi, BatteryFull, SlidersHorizontal } from "lucide-react";

const samples = [
  {
    period: "24h",
    tokens: "2.48M",
    cost: "$8.62",
    start: "24 hours ago",
    bars: [
      4, 7, 9, 6, 12, 13, 21, 28, 16, 12, 7, 8, 12, 16, 25, 30, 23, 16, 27, 38,
      44, 32, 24, 16,
    ],
  },
  {
    period: "7d",
    tokens: "16.32M",
    cost: "$54.80",
    start: "7 days ago",
    bars: [
      5, 8, 13, 22, 28, 18, 8, 12, 25, 16, 21, 29, 24, 19, 27, 33, 16, 19, 29,
      40, 34,
    ],
  },
  {
    period: "30d",
    tokens: "68.14M",
    cost: "$231.46",
    start: "30 days ago",
    bars: [
      5, 8, 6, 14, 9, 13, 4, 15, 12, 11, 26, 24, 18, 12, 6, 9, 28, 30, 26, 22,
      12, 14, 30, 42, 33, 31, 28, 17, 23, 32,
    ],
  },
];
const rows = [
  {
    name: "Codex",
    icon: "codex",
    used: 32,
    label: "Weekly",
    reset: "Fri 2:30 PM",
  },
  {
    name: "Claude",
    icon: "claude",
    used: 58,
    label: "5-hour",
    reset: "4:10 PM",
  },
];
export default function Preview() {
  const [index, setIndex] = useState(0);
  const data = samples[index];
  return (
    <figure
      className="preview"
      aria-label="Interactive Slopwatch preview with example data"
    >
      <div className="blueprint" aria-hidden="true">
        <div className="dial" />
        <div className="crosshair" />
      </div>
      <div className="macbar" aria-hidden="true">
        <Timer size={18} />
        <Wifi size={17} />
        <BatteryFull size={20} />
        <SlidersHorizontal size={15} />
        <span>Tue 10:42 AM</span>
      </div>
      <div className="popover">
        <div className="pophead">
          <b>
            <Timer size={19} /> Slopwatch
          </b>
          <div
            className="range"
            role="group"
            aria-label="Preview history period"
          >
            {samples.map((s, i) => (
              <button
                key={s.period}
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
              >
                {s.period}
              </button>
            ))}
          </div>
        </div>
        <div className="screen">
          <div className="metrics" aria-live="polite">
            <div>
              <small>Tokens</small>
              <strong>{data.tokens}</strong>
            </div>
            <div>
              <small>API value</small>
              <strong>{data.cost}</strong>
            </div>
          </div>
          <div className="bars" aria-hidden="true">
            {data.bars.map((height, i) => (
              <i
                key={i}
                style={{
                  height: height * 1.8 + "%",
                  background: i % 5 === 0 ? "#f3aa74" : undefined,
                }}
              />
            ))}
          </div>
          <div className="axis">
            <span>{data.start}</span>
            <span>Now</span>
          </div>
        </div>
        <div className="quotatitle">Subscription limits</div>
        {rows.map((row) => (
          <div className="provider" key={row.name}>
            <div>
              <b>
                <img
                  src={"/" + row.icon + ".png"}
                  width="17"
                  height="17"
                  alt=""
                />
                {row.name}
              </b>
              <span>{row.label}</span>
            </div>
            <div className="progress">
              <i style={{ width: row.used + "%" }} />
            </div>
            <div className="reset">
              <span>{row.used}% used</span>
              <span>Resets {row.reset}</span>
            </div>
          </div>
        ))}
      </div>
      <figcaption>
        <span>
          <i /> Interactive preview
        </span>
        <span>Example data</span>
      </figcaption>
    </figure>
  );
}
