export type ServiceMessage = { message: string };

type ServiceResponseErrorType = 
    'UNAUTHORIZED' | 'NOT_FOUND' | 'INTERNAL_SERVER_ERROR' | 'INVALID_DATA';

export type ServiceResponseError ={
    status: ServiceResponseErrorType; 
    data: ServiceMessage;
};

export type ServiceResponseSuccess<T> = {
    status: 'SUCCESSFUL' | 'CREATED';
    data: T;
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;