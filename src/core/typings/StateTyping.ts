import { IncidentTyping } from './IncidentTyping';

export interface RootState {
    ong:{
        name: string,
        id: string
    },
    definitions: {
        language: string,
        currency: string
    },
    incidentList: IncidentTyping[],
    loading: boolean
}