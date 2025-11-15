"use client";

import { NavBar } from "../components/NavBar";
import { AudioConsole } from "../components/AudioConsole";
import { SpiderVFX } from "../components/SpiderVFX";

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <NavBar />
      <SpiderVFX />
      <AudioConsole />

      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
              Cookie Policy - NULLXES AIRLANE
            </h1>

            <div className="space-y-8 text-zinc-300 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">1. Introduction to Our Cookie Philosophy</h2>
                <p className="mb-4">
                  At NULLXES AIRLANE, we believe in minimal digital footprints. Our cookie policy is designed with the same precision and respect for privacy as our universe-class travel systems. We use cookies sparingly and only when absolutely necessary for essential functionality.
                </p>
                <p>
                  This policy explains what cookies are, how we use them, and your rights to control them. Unlike other airlines that track your every move, we maintain the silence of the void in our digital operations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">2. What Are Cookies?</h2>
                <p className="mb-4">
                  Cookies are small text files stored on your device when you visit our website. Think of them as tiny quantum markers that help our systems remember your preferences without invading your personal reality.
                </p>
                <div className="bg-black/30 p-4 rounded-lg border border-zinc-700">
                  <p className="text-sm">
                    <strong>Types of Cookies We Use:</strong><br />
                    <span className="text-green-400">Essential:</span> Required for basic website functionality<br />
                    <span className="text-yellow-400">Functional:</span> Remember your preferences<br />
                    <span className="text-red-400">Performance:</span> Help us improve (anonymized only)
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">3. Cookies We Use</h2>
                <div className="space-y-6">
                  <div className="border border-zinc-700 rounded-lg p-4">
                    <h3 className="font-medium text-white mb-2">Essential Cookies</h3>
                    <p className="text-sm mb-2">These cookies are absolutely necessary for the website to function:</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li><strong>Session Management:</strong> Keeps you logged in during your visit</li>
                      <li><strong>Security Tokens:</strong> Protects against unauthorized access</li>
                      <li><strong>Reality Verification:</strong> Ensures you're in the correct universe</li>
                    </ul>
                    <p className="text-xs text-zinc-500 mt-2">Cannot be disabled - required for service operation</p>
                  </div>

                  <div className="border border-zinc-700 rounded-lg p-4">
                    <h3 className="font-medium text-white mb-2">Functional Cookies</h3>
                    <p className="text-sm mb-2">These cookies enhance your experience:</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li><strong>Language Preference:</strong> Remembers your chosen language</li>
                      <li><strong>Audio Settings:</strong> Remembers your sound preferences</li>
                      <li><strong>Theme Selection:</strong> Maintains your visual preferences</li>
                    </ul>
                    <p className="text-xs text-zinc-500 mt-2">Optional but recommended for best experience</p>
                  </div>

                  <div className="border border-zinc-700 rounded-lg p-4">
                    <h3 className="font-medium text-white mb-2">Performance Cookies</h3>
                    <p className="text-sm mb-2">These cookies help us improve our service:</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li><strong>Error Tracking:</strong> Helps us fix issues (anonymized)</li>
                      <li><strong>Load Times:</strong> Measures performance (aggregated)</li>
                      <li><strong>Feature Usage:</strong> Understands which features are used (no personal data)</li>
                    </ul>
                    <p className="text-xs text-zinc-500 mt-2">Fully anonymized, cannot identify individuals</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">4. Third-Party Cookies</h2>
                <p className="mb-4">
                  NULLXES AIRLANE maintains a strict "no third-party" policy. We do not share cookies with advertising networks, social media platforms, or analytics companies.
                </p>
                <div className="bg-red-900/20 border border-red-500/50 p-4 rounded-lg">
                  <p className="text-red-400 font-medium">
                    <strong>ZERO THIRD-PARTY COOKIES:</strong> We never sell, share, or rent your browsing data to anyone. Your digital footprint remains yours alone.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">5. Cookie Lifespan</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-white mb-2">Session Cookies</h3>
                    <p>Deleted when you close your browser. These handle temporary states like login sessions.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-2">Persistent Cookies</h3>
                    <p>Remain until deleted or expired. Used for preferences and are automatically removed after 30 days of inactivity.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-2">Void Cookies</h3>
                    <p>Our custom cookies that self-destruct after serving their purpose, leaving no trace in the digital void.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">6. Managing Your Cookies</h2>
                <p className="mb-4">You have full control over cookies on our website:</p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-white mb-2">Browser Settings</h3>
                    <p>You can control cookies through your browser settings:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><strong>Block All:</strong> Disable all cookies (will break essential features)</li>
                      <li><strong>Block Third-Party:</strong> Allow only our cookies</li>
                      <li><strong>Delete Existing:</strong> Remove all stored cookies</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-white mb-2">Our Cookie Controls</h3>
                    <p>We provide in-site controls for non-essential cookies:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Cookie preference center (accessible via footer)</li>
                      <li>One-click opt-out for performance cookies</li>
                      <li>Real-time cookie status display</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">7. Mobile Considerations</h2>
                <p className="mb-4">
                  On mobile devices, we respect platform-specific cookie handling and privacy features. iOS and Android provide additional controls that work seamlessly with our minimal cookie approach.
                </p>
                <p>
                  Our mobile app (when available) will follow the same strict privacy standards as our web platform.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">8. Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy to reflect changes in technology or regulations. Significant changes will be announced through our website. We will never introduce advertising or tracking cookies without explicit user consent.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">9. Contact Information</h2>
                <p className="mb-4">
                  Questions about our cookie practices? Contact our privacy team:
                </p>
                <div className="bg-black/50 p-4 rounded-lg border border-zinc-700">
                  <p><strong>NULLXES AIRLANE Cookie Compliance</strong></p>
                  <p>Digital Void Sector 3</p>
                  <p>Cookie Control Center</p>
                  <p>Email: cookies@nullxes.airlane</p>
                  <p>Protocol: Spider Cookie Protocol 3</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">10. Cookie Consent</h2>
                <p className="mb-4">
                  By using NULLXES AIRLANE services, you consent to our essential cookie usage. For optional cookies, we provide clear opt-in/opt-out controls.
                </p>
                <div className="bg-green-900/20 border border-green-500/50 p-4 rounded-lg">
                  <p className="text-green-400 font-medium">
                    <strong>TRANSPARENCY COMMITMENT:</strong> We believe in informed consent. Every cookie we use serves a specific, documented purpose with clear benefits to your experience.
                  </p>
                </div>
              </section>

              <section className="border-t border-zinc-700 pt-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <p className="text-sm text-zinc-500">
                      Cookie Policy Version: VOID-2025.11.15<br />
                      Last Scan: November 15, 2025<br />
                      Compliance Level: MAXIMUM
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-zinc-600">
                      Total Cookies Used: 7<br />
                      Third-Party Cookies: 0<br />
                      Tracking Cookies: 0
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
