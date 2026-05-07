/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      // Thin BMI reference pages have been consolidated into /bmi-guide.
      // Permanent (301) redirects so Google replaces the old indexed URLs
      // with the new canonical guide.
      { source: "/bmi-chart", destination: "/bmi-guide", permanent: true },
      { source: "/bmi-formula", destination: "/bmi-guide", permanent: true },
      { source: "/bmi-categories", destination: "/bmi-guide", permanent: true },
      // Spanish equivalents redirect to the existing Spanish hub until the
      // Spanish version of the consolidated guide is published.
      { source: "/es/bmi-chart", destination: "/es/health-calculators", permanent: true },
      { source: "/es/bmi-formula", destination: "/es/health-calculators", permanent: true },
      { source: "/es/bmi-categories", destination: "/es/health-calculators", permanent: true }
    ];
  }
};

export default nextConfig;
