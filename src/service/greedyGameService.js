import http from "./httpService";

const apiEndpoint = "http://go-dev.greedygame.com/v3/dummy/";

//may need to change the st in which data is stored
export async function getAppNames() {
    const { data } = await http.get(apiEndpoint + "apps");
    return data.data
}

export async function getReport(start, end) {
  const startDate = start.toISOString().split("T")[0];
  const endDate = end.toISOString().split("T")[0];

  const { data } = await http.get(
    apiEndpoint + `report?startDate=${startDate}&endDate=${endDate}`
  );
  return data.data
}
