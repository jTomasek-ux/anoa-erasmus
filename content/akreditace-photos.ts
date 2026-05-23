function fileName(index: number | "base") {
  if (index === "base") return "00.jpeg";
  return `${String(index).padStart(2, "0")}.jpeg`;
}

export function akreditaceImageSrc(index: number | "base") {
  return `/Akreditace/${fileName(index)}`;
}

export type AkreditacePhotoGroup = {
  title: string;
  indices: (number | "base")[];
};

/** Pořadí odpovídá galerii na webu školy. */
export const akreditacePhotoGroups: AkreditacePhotoGroup[] = [
  {
    title: "Villa Nova de Milfontes, Portugalsko 2024",
    indices: ["base", 1, 2, 3],
  },
  {
    title: "Memmingen, Německo 2023",
    indices: [4, 5, 6, 7, 8, 9, 10],
  },
  {
    title: "Villa Nova de Milfontes, Portugalsko 2023",
    indices: [11, 12, 13, 14],
  },
  {
    title: "L´Alcudia, Španělsko 2023",
    indices: [15, 16],
  },
  {
    title: "Alicante, Španělsko 2023",
    indices: [17, 18],
  },
  {
    title: "Dobrich, Bulharsko 2023",
    indices: [19],
  },
  {
    title: "Reggio di Calabria, Itálie 2023",
    indices: [20],
  },
  {
    title: "Hazebrouck, Francie 2023",
    indices: [21, 22],
  },
  {
    title: "Nazilli, Turecko 2023",
    indices: [23, 24],
  },
  {
    title: "Villa Nova de Milfontes, Portugalsko 2022",
    indices: [25, 26, 27, 28, 29],
  },
  {
    title: "Alicante, Španělsko 2022",
    indices: [30, 31, 32],
  },
  {
    title: "Hazebrouck, Francie 2022",
    indices: [33, 34, 35, 36, 37],
  },
  {
    title: "Další momenty z praxí",
    indices: [38, 39],
  },
];

export const allAkreditaceIndices: (number | "base")[] =
  akreditacePhotoGroups.flatMap((g) => g.indices);
