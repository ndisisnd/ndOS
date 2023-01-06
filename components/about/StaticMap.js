import { Marker, StaticGoogleMap } from "react-static-google-map";

export default function StaticMap() {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="uppercase tracking-wide text-neutral-secondary">Where</h3>
      <StaticGoogleMap
        className="rounded-2xl"
        size="1000x400"
        apiKey="AIzaSyAC1ZciVXxI1LbKQM1jic8qLR5nH2wNtaY"
        scale="1"
        zoom="13"
      >
        <Marker
          location="1.279231074639829, 103.84911664205099"
          size="normal"
          color="blue"
        />
      </StaticGoogleMap>
    </section>
  );
}
