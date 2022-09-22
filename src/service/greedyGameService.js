import http from "./httpService";

const apiEndpoint = "http://go-dev.greedygame.com/v3/dummy/";

//may need to change the st in which data is stored
export async function getAppNames() {
  const { data } = await http.get(apiEndpoint + "apps");
  const appNamesObject = {}
  data.data.forEach(item=>{appNamesObject[item.app_id]=item.app_name});
  return appNamesObject;
}

export async function getReport(start, end) {
  start.setHours(5);
  start.setMinutes(30);
  end.setHours(5);
  end.setMinutes(30);
  const startDate = start.toISOString(true).split("T")[0];
  const endDate = end.toISOString().split("T")[0];

  const { data } = await http.get(
    apiEndpoint + `report?startDate=${startDate}&endDate=${endDate}`
  );
  return data.data;
}
