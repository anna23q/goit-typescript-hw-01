type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
  };
  
  export function compare<
    T extends Pick<AllType, "name" | "color">,
    B extends Pick<AllType, "position" | "weight">
  >(top: T, bottom: B): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    };
  }
  