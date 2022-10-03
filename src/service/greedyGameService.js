import http from "./httpService";
import { format } from "date-fns";

const apiEndpoint = "http://go-dev.greedygame.com/v3/dummy/";

//may need to change the st in which data is stored
export async function getAppNames() {
  const { data } = await http.get(apiEndpoint + "apps");
  const appNamesObject = {};
  data.data.forEach((item) => {
    appNamesObject[item.app_id] = item.app_name;
  });
  return appNamesObject;
}

export async function getReport(start, end) {
  const { data } = await http.get(
    apiEndpoint +
      `report?startDate=${format(start, "yyyy-MM-dd")}&endDate=${format(
        end,
        "yyyy-MM-dd"
      )}`
  );
  return data.data;
}
