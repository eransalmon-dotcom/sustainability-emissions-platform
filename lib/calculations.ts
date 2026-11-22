type EmissionsCalculation = {
  kco2e: number;
  status: "VERIFIED" | "ESTIMATE" | "FALLBACK" | "PENDING_UPDATE";
  method: string;
};

export function multiply(quantity: number, factor: number): EmissionsCalculation {
  if (!Number.isFinite(quantity) || !Number.isFinite(factor)) {
    throw new Error("Quantity and factor must be finite numbers");
  }

  return {
    kco2e: quantity * factor,
    status: "ESTIMATE",
    method: "quantity × factor",
  };
}

export function kco2eToTco2e(kco2e: number): number {
  return kco2e / 1000;
}

export function cubicFeetToCubicMeters(cubicFeet: number): number {
  return cubicFeet * 0.028316846592;
}

export function cubicMetersToCubicFeet(cubicMeters: number): number {
  return cubicMeters * 35.31466672;
}

export function kwhToMmbtu(kwh: number): number {
  return kwh / 293.071;
}

export function cubicFeetToMmbtu(cubicFeet: number): number {
  return cubicFeet * 0.001039;
}

export function mmbtuToTherms(mmbtu: number): number {
  return mmbtu * 10;
}

export function mmbtuToKco2e(mmbtu: number): number {
  return mmbtu * 52.91;
}

export function kcalPerCubicMeterToMjPerCubicMeter(kcalPerM3: number): number {
  return kcalPerM3 * 0.0041868;
}

export function fallbackCubicMetersToKco2e(cubicMeters: number): EmissionsCalculation {
  return {
    kco2e: cubicMeters * 2.11,
    status: "FALLBACK",
    method: "Fallback: cubic meters × 2.11 kCO2e/m³ (explicit approval required)",
  };
}
