interface DynamicHeadingTypes {
  title: string;
}

export default function DynamicHeading(props: DynamicHeadingTypes) {
  return (
    <>
      <section className="border-b border-gray-300 mb-6 px-4 py-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          {props.title}
        </h1>
      </section>
    </>
  );
}
