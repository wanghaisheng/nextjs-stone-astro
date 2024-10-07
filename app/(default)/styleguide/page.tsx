const colors = [
  {
    name: "white",
    hex: "#ffffff",
  },
  {
    name: "50",
    hex: "#fafaf9",
  },
  {
    name: "100",
    hex: "#f5f5f4",
  },
  {
    name: "200",
    hex: "#e7e5e4",
  },
  {
    name: "300",
    hex: "#d6d3d1",
  },
  {
    name: "400",
    hex: "#a8a29e",
  },
  {
    name: "500",
    hex: "#78716c",
  },
  {
    name: "600",
    hex: "#57534e",
  },
  {
    name: "700",
    hex: "#44403c",
  },
  {
    name: "800",
    hex: "#292524",
  },
  {
    name: "900",
    hex: "#1c1917",
  },
  {
    name: "950",
    hex: "#0c0a09",
  },
];

export default function StyleGuidPage() {
  return (
    <>
      <header className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Styleguide
          </h1>
        </div>
      </header>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col gap-16">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Colors</h2>
            <div className="grid grid-cols-2 gap-12 sm:grid-cols-6">
              {colors.map((color, i) => (
                <div key={`color-${i}`} className="relative flex">
                  <div className="flex flex-col gap-2">
                    <div
                      className="border-primary-900/10 dark:border-primary-300/10 h-16 w-16 rounded-md border"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="text-sm font-medium">{color.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col gap-16">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Typography</h2>
            <div className="flex flex-col gap-16 sm:flex-row">
              <div className="flex flex-col gap-8">
                <div className="bg-primary-500/10 dark:bg-primary-400/10 flex w-64 flex-col items-center gap-3 rounded-md p-6">
                  <p className="text-5xl">Aa</p>
                  <p className="text-primary-950/70 dark:text-primary-200/70 text-base">Inter</p>
                </div>
                <div className="bg-primary-500/10 dark:bg-primary-400/10 flex w-64 flex-col items-center gap-3 rounded-md p-6">
                  <p className="text-5xl font-medium">Aa</p>
                  <p className="text-primary-950/70 dark:text-primary-200/70 text-base">
                    Inter Medium
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
                  Heading 1
                </h1>
                <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Heading 2</h2>
                <h3 className="text-xl font-medium sm:text-2xl">Heading 3</h3>
                <p className="text-lg sm:text-xl">Subtitle</p>
                <p className="text-base font-medium">Bold text</p>
                <p className="text-base">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                  perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit
                  eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
                  dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
