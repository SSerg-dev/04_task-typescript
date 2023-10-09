interface Data {
  id: string;
  title: string;
  body: string;
}

interface ByIdData {
  byId: {
    [key: symbol | string | number]: Data;
  };
}
interface AllIdsData {
  allIds: string[]; 
}

interface FullData extends ByIdData, AllIdsData {}

const fullData: FullData = {
  byId: {},
  allIds: [],
};

export const normalizeData = (unnormalizedData: Data[]) => {
  unnormalizedData.map((item) => {
    fullData.allIds.push(item.id);

    fullData.byId[item.id] = {
      id: item.id,
      title: item.title,
      body: item.body,
    };
  });

  return fullData;
};
