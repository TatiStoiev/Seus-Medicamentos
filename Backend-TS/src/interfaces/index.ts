export type NewEntity<T> = Omit<T, 'id'>;

export type medicineFound = {
    name: string;
    activePrinciple: string, 
    composition: string,
    presentation: string,
    use: string, 
    drugInteractions: string
}