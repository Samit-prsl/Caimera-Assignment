import { createContext } from 'react';

const BASE_URI = import.meta.env.VITE_BACKEND_URL;

type ReqContextType = {
  post: <T>(url: string, body: any) => Promise<T>;
  get: <T>(url: string) => Promise<T>;
  put: <T>(url: string, body: any) => Promise<T>;
  delete: <T>(url: string) => Promise<T>;
  upload: <T>(url: string, body: FormData) => Promise<T>;
};

const SecureReqContext = createContext<ReqContextType>({
  post: async () => {
    throw new Error('SecureReqContext not yet initialized');
  },
  get: async () => {
    throw new Error('SecureReqContext not yet initialized');
  },
  put: async () => {
    throw new Error('SecureReqContext not yet initialized');
  },
  delete: async () => {
    throw new Error('SecureReqContext not yet initialized');
  },
  upload: async () => {
    throw new Error('SecureReqContext not yet initialized');
  },
});

export const SecureReqProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const post: <T>(url: string, body: any) => Promise<T> = async (url, body) => {
    const conf = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
console.log(conf);

    const response = await fetch(`${BASE_URI}/api/${url}`, conf);
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed');
  };

  const get: <T>(url: string) => Promise<T> = async url => {
    const conf = {
      method: 'GET',
      headers: {
      },
    };
    const response = await fetch(`${BASE_URI}/${url}`, conf);

    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed');
  };
  const put: <T>(url: string, body: any) => Promise<T> = async (url, body) => {
    const conf = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    const response = await fetch(`${BASE_URI}/${url}`, conf);

    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed');
  };

  const deleteRequest: <T>(url: string) => Promise<T> = async url => {
    const conf = {
      method: 'DELETE',
      headers: {
      },
    };

    const response = await fetch(`${BASE_URI}/${url}`, conf);

    if (response.ok) {
      return response.json();
    }

    throw new Error('Request failed');
  };

  const upload: <T>(url: string, body: FormData) => Promise<T> = async (
    url,
    body
  ) => {
    const conf = {
      method: 'POST',
      headers: {
      },
      body,
    };

    const response = await fetch(`${BASE_URI}/${url}`, conf);

    if (response.ok) {
      return response.json();
    }

    throw new Error('Request failed');
  };

  return (
    <SecureReqContext.Provider
      value={{ post, get, put, delete: deleteRequest, upload }}
    >
      {children}
    </SecureReqContext.Provider>
  );
};

export default SecureReqContext;
