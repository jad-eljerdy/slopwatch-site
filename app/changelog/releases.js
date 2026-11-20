// Newest first. Use the public GitHub tag and its publication date in UTC.
export const releases = [
  {
    tag: "v1.1.7",
    date: "2026-11-20",
    title: "Five-hour and weekly balances together",
    changes: [
      "Claude now shows its five-hour balance by default. Codex starts with its lowest remaining balance. You can choose the limit for each provider in General settings.",
      "Select 5-hour above weekly to show both readings beside a provider icon. A dash marks a window without a current reading.",
      "When reset reminders are enabled, Slopwatch asks for notification permission on launch if you have not made a choice. You can grant permission before either provider reports a banked reset.",
    ],
  },
  {
    tag: "v1.1.6",
    date: "2026-11-20",
    title: "Remaining limits in the menu bar",
    changes: [
      "Show Codex, Claude, or both beside the clock. Each icon shows the lowest percentage left across that provider’s current limits. Hover to see which limit it uses.",
      "Select the new 12-hour window to compare token usage and estimated API cost. The chart groups activity into 30-minute intervals.",
      "Open provider details to see reset dates, tokens, and API value in separate columns. The panel scrolls on smaller displays.",
      "See banked resets and their expiry dates when the provider reports them. Open the provider’s usage page to review a reset.",
      "Allow macOS notifications to receive an expiry reminder. The default is 24 hours. Choose 1, 6, 12, 24, or 48 hours in Settings.",
      "If Claude Code omits the balance, paste the count from the Claude usage page. An optional reader can read the visible usage page in Safari or Chrome with Accessibility permission. Page readings expire after 15 minutes.",
    ],
  },
  {
    tag: "v1.1.5",
    date: "2026-11-18",
    title: "Daily software update checks",
    changes: [
      "Slopwatch checks for app updates once each local calendar day when automatic updates are enabled. It remembers a successful check across launches.",
      "A missed check runs when the app next opens, the Mac wakes, or the network returns. Failed checks retry with increasing delays of up to one hour.",
    ],
  },
  {
    tag: "v1.1.4",
    date: "2026-11-18",
    title: "Control over subscription checks",
    changes: [
      "General settings let you check subscription limits every 1, 3, 5, 10, 30, or 60 minutes. The default is 5 minutes. Refresh usage checks immediately.",
      "Limit bars show the percentage left by default. Switch to percentage used, hide reset times, or hide disconnected subscriptions. Recorded activity still counts toward the totals.",
      "Manage automatic software updates in General. Find the app version, build number, and creator in About.",
    ],
  },
  {
    tag: "v1.1.3",
    date: "2026-11-18",
    title: "Compressed Codex history",
    changes: [
      "The app includes a Zstandard decoder. It reads compressed Codex sessions and archived logs on Macs without a separate decoder installation.",
      "This fixes a missing-decoder warning and includes those logs in token totals and API cost estimates.",
    ],
  },
  {
    tag: "v1.1.2",
    date: "2026-11-18",
    title: "A new installer and a clearer update check",
    changes: [
      "The disk image opens in a custom Finder window. Drag Slopwatch along the arrow into Applications.",
      "The panel shows the installed version beside Check for Updates. When a preview build is ahead of the public release, the result identifies both versions.",
    ],
  },
  {
    tag: "v1.1.1",
    date: "2026-11-18",
    title: "One copy in the menu bar",
    changes: [
      "Opening Slopwatch several times now keeps one menu bar item. This also covers opening a copy from the disk image while the installed app is running.",
    ],
  },
  {
    tag: "v1.1",
    date: "2026-11-18",
    title: "Signed automatic updates",
    changes: [
      "Sparkle verifies the signed update feed and app download. It can download an update in the background and install it when you quit.",
      "This release introduced a three-day check interval and a manual Check for Updates command. Version 1.1.5 changed the automatic interval to daily.",
      "Users on v1.0 can install the current DMG once to receive future updates.",
    ],
  },
  {
    tag: "v1.0",
    date: "2026-11-18",
    title: "The first Mac release",
    changes: [
      "Connect your signed-in Codex and Claude Code CLIs. See reported subscription limits and reset times from the menu bar.",
      "Read local session history to compare token counts and estimated API costs over 24 hours, 7 days, and 30 days. Usage history stays on your Mac.",
      "The first public installer supports Apple silicon and Intel Macs running macOS 26 or later.",
    ],
  },
];
