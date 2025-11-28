export const mockMedicineWithoutUseKey = {
    name: 'Medicamento X', 
    activePrinciple: 'X',
    composition: 'composição',
    presentation: 'comprimidos', 
    drugInteractions: 'nenhuma',
};

export const mockMedicineWithoutName = {
    name: '', 
    activePrinciple: 'X',
    composition: 'composição',
    presentation: 'comprimidos', 
    use: 'oral',
    drugInteractions: 'nenhuma',
};

export const mockMedicineCompleted = {
    name: 'Medicamento X', 
    activePrinciple: 'X',
    composition: 'composição',
    presentation: 'comprimidos', 
    use: 'oral',
    drugInteractions: 'nenhuma',
};

export const mockMedicineCompleted2 = {
    name: 'Medicamento XX', 
    activePrinciple: 'XX',
    composition: 'composição',
    presentation: 'comprimidos', 
    use: 'oral',
    drugInteractions: 'nenhuma',
};

export const mockMedicineCreated = {
    id: 5,
    name: 'Medicamento X', 
    activePrinciple: 'X',
    composition: 'composição',
    presentation: 'comprimidos', 
    use: 'oral',
    drugInteractions: 'nenhuma',
};

export const mockMedicineCreatedWithoutId = {
    name: 'Medicamento X', 
    activePrinciple: 'X',
    composition: 'composição',
    presentation: 'comprimidos', 
    use: 'oral',
    drugInteractions: 'nenhuma',
};

export const mockMedicineCreated2 = {
    id: 6,
    name: 'Medicamento XX', 
    activePrinciple: 'XX',
    composition: 'composição',
    presentation: 'comprimidos', 
    use: 'oral',
    drugInteractions: 'nenhuma',
};

export const mockMedicineFindByNameWithId = {
    id: 5,
    name: 'XXX', 
    activePrinciple: 'X',
    composition: 'composição',
    presentation: 'comprimidos', 
    use: 'oral',
    drugInteractions: 'nenhuma',
};

export const mockMedicineFound = {
    name: 'XXX', 
    activePrinciple: 'X',
    composition: 'composição',
    presentation: 'comprimidos', 
    use: 'oral',
    drugInteractions: 'nenhuma',
};

export const resultFindByName = {
    status: 'SUCCESSFUL',
    data: mockMedicineFound,
};

export const resultFindByActivePrinciple = {
    status: 'SUCCESSFUL',
    data: mockMedicineFound,
};