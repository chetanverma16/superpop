import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Data Protection",
  description:
    "Learn how SuperPop handles protected customer data, complies with Shopify requirements, and safeguards personally identifiable information.",
};

const accessLevels = [
  {
    level: "Level 0",
    scope: "No customer data",
    actions: ["No additional action required"],
  },
  {
    level: "Level 1",
    scope: "Customer data excluding name, address, phone, and email fields",
    actions: [
      "Request protected customer data access in the Shopify Partner Dashboard",
      "Implement all level 1 protected customer data requirements",
    ],
  },
  {
    level: "Level 2",
    scope: "Customer data including name, address, phone, or email fields",
    actions: [
      "Request protected customer data and specific fields via the Partner Dashboard",
      "Implement level 1 and level 2 requirements",
      "Participate in Shopify data protection reviews when requested",
    ],
  },
];

const levelOneRequirements = [
  "Process only the minimum personal data required to deliver app functionality.",
  "Inform merchants which personal data is processed and why.",
  "Limit processing of personal data to the stated purposes.",
  "Honor customer consent decisions and opt-outs where applicable.",
  "Support merchant obligations for any customer data sharing opt-outs.",
  "Provide manual alternatives when automated decision-making has legal or significant effects.",
  "Maintain privacy and data protection agreements with merchants.",
  "Apply retention periods and delete personal data when no longer needed.",
  "Encrypt personal data at rest and in transit.",
];

const levelTwoRequirements = [
  "Encrypt all data backups containing personal data.",
  "Separate production and test environments to avoid data leakage.",
  "Operate a data loss prevention strategy across systems and staff.",
  "Restrict employee access to protected customer data on a need-to-know basis.",
  "Enforce strong password policies for internal accounts.",
  "Maintain access logs for protected data and review them regularly.",
  "Publish and follow a documented security incident response plan.",
];

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 space-y-16">
      <header className="space-y-4 text-center md:text-left">
        <p className="inline-flex items-center rounded-full border border-neutral-200 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
          Privacy Policy
        </p>
        <h1 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
          Work with Protected Customer Data Responsibly
        </h1>
        <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
          SuperPop is built to help Shopify merchants capture leads without
          compromising customer trust. This policy explains how we minimize the
          data we collect, how we request access to protected customer data, and
          how we comply with Shopify&apos;s privacy and security requirements.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Access Levels & Partner Actions
        </h2>
        <div className="overflow-hidden rounded-3xl border border-neutral-200">
          <table className="w-full border-collapse text-left text-sm text-neutral-700">
            <thead className="bg-neutral-50 text-neutral-600">
              <tr>
                <th className="px-5 py-3 font-medium">Level</th>
                <th className="px-5 py-3 font-medium">Data Scope</th>
                <th className="px-5 py-3 font-medium">Partner Actions</th>
              </tr>
            </thead>
            <tbody>
              {accessLevels.map((row) => (
                <tr key={row.level} className="border-t border-neutral-200">
                  <td className="px-2 py-4 font-semibold text-neutral-900">
                    {row.level}
                  </td>
                  <td className="px-5 py-4 text-neutral-600">{row.scope}</td>
                  <td className="px-5 py-4">
                    <ul className="space-y-2 text-neutral-600">
                      {row.actions.map((action) => (
                        <li
                          key={`${row.level}-${action}`}
                          className="flex items-center gap-2"
                        >
                          <span className="h-1 w-1 flex-none rounded-full bg-neutral-900" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed text-neutral-500">
          Public apps must request approval for the level and individual fields
          required. Custom apps and admin-created custom apps have broader
          access but must still comply with all applicable privacy obligations.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Requesting Access to Protected Customer Data
        </h2>
        <ol className="space-y-3 text-neutral-600">
          <li>
            1. Navigate to <span className="font-medium">Apps</span> in the
            Shopify Partner Dashboard and choose the app requesting access.
          </li>
          <li>
            2. Open <span className="font-medium">API access</span> and select
            <span className="font-medium">Protected customer data access</span>.
          </li>
          <li>
            3. Provide justification for the protected data and, when
            applicable, specify name, address, phone, and email fields
            individually.
          </li>
          <li>
            4. Complete the data protection questionnaire and confirm all
            requirements are met.
          </li>
          <li>5. Submit the app for review when ready to launch.</li>
        </ol>
        <p className="text-sm leading-relaxed text-neutral-500">
          Development stores can access selected fields without review once data
          usage details are saved. Production access always requires Shopify
          approval to ensure data minimization and merchant transparency.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Level 1 Requirements We Meet
        </h2>
        <div className="space-y-3 rounded-3xl border border-neutral-200 p-6">
          <ul className="space-y-3 text-sm leading-relaxed text-neutral-600 md:text-base">
            {levelOneRequirements.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-1 w-1 flex-none rounded-full bg-neutral-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Additional Level 2 Commitments
        </h2>
        <div className="space-y-3 rounded-3xl border border-neutral-200 p-6">
          <ul className="space-y-3 text-sm leading-relaxed text-neutral-600 md:text-base">
            {levelTwoRequirements.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-1 w-1 flex-none rounded-full bg-neutral-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Using Protected Customer Data
        </h2>
        <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
          When SuperPop is approved to access protected customer data, API
          responses only include fields we are authorized to use. Unapproved
          fields return{" "}
          <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs">
            null
          </code>{" "}
          and a descriptive error, allowing us to handle redacted data
          gracefully. All customer-facing features are designed to degrade
          without exposing or persisting unapproved information.
        </p>
        <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
          We regularly review our integrations with the Admin API, Customer
          Account API, and Storefront API to confirm that our data usage stays
          within approved scopes. Any new functionality that requires additional
          fields triggers another review and internal security assessment before
          release.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Data Protection Reviews & Compliance
        </h2>
        <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
          Shopify may request a data protection review at any time. SuperPop
          keeps detailed documentation of our data handling practices, access
          logs, and retention schedules so we can respond quickly to these
          requests. We also stay current with privacy laws and update our
          agreements and technical controls as regulations evolve.
        </p>
        <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
          All partners using SuperPop agree to Shopify&apos;s Partner Program
          Agreement and API License Terms, and we expect merchants to uphold the
          same level of care with any customer data they export from our app.
        </p>
      </section>

      <footer className="space-y-3 rounded-3xl border border-neutral-200 p-6 text-sm leading-relaxed text-neutral-600 md:text-base">
        <p>
          For questions about this policy or to request additional details
          regarding our privacy and security practices, contact
          <a
            href="mailto:hello@chetanverma.com"
            className="ml-1 text-neutral-900 underline"
          >
            hello@chetanverma.com
          </a>
          .
        </p>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </main>
  );
}
