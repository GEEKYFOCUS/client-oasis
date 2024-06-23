import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  console.log(params, "id");
  const { cabinId } = params;
  try {
    const [cabin, BookedDate] = await Promise.all([
      getBookedDatesByCabinId(cabinId),
      getCabin(cabinId),
    ]);
    console.log(cabin, "cabinGet");

    return Response.json({ cabin, BookedDate });
  } catch (error) {
    return Response.json({ message: "cabin could not be found" });
  }
}
