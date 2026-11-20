"use client";

import { useEffect, useRef } from "react";
import { ArrowDownToLine } from "lucide-react";

function record(event) {
  if (navigator.globalPrivacyControl || navigator.doNotTrack === "1") return;
  const page = window.location.pathname === "/changelog" ? "?page=changelog" : "";
  const path = "/api/metrics/" + event + page;
  if (!navigator.sendBeacon?.(path)) {
    fetch(path, { method: "POST", keepalive: true }).catch(() => {});
  }
}

export default function DownloadLink() {
  const counted = useRef(false);
  useEffect(() => {
    if (!counted.current) {
      counted.current = true;
      record("visit");
    }
  }, []);
  return (
    <a
      className="download"
      href="/download"
      onClick={() => record("download")}
      onAuxClick={(event) => {
        if (event.button === 1) record("download");
      }}
    >
      <ArrowDownToLine size={19} />
      Download for Mac
    </a>
  );
}
