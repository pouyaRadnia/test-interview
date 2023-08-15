import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface QueryValueOptions<T> {
    serializer: (value: T) => string;
    deserializer: (value: string) => T;
}
type UseQueryReturn<T> = [value: T[], setValue: (value: T[]) => void];
const defaultSerializer = (value: any) => String(value);
const defaultDeserializer = (value: string) => String(value);

export function useQueryValue(
    key: string
): [value: string[] | undefined, setValue: (value: string[]) => void];
// eslint-disable-next-line no-redeclare
export function useQueryValue(
    key: string,
    defaultValue: string[]
): UseQueryReturn<string>;

// eslint-disable-next-line no-redeclare
export function useQueryValue<T>(
    key: string,
    defaultValue: T[],
    options: QueryValueOptions<T>
): UseQueryReturn<T>;

// eslint-disable-next-line no-redeclare
export function useQueryValue<T>(
    key: string,
    defaultValue?: T[],
    options?: QueryValueOptions<T>
) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const { serializer, deserializer } = {
        serializer: defaultSerializer,
        deserializer: defaultDeserializer,
        ...options,
    };

    const rawValue = searchParams.getAll(key);
    const isValueProvided = rawValue.length !== 0;
    const value = isValueProvided
        ? rawValue.map((item) => deserializer(item))
        : defaultValue;
    const setValue = (value: T[]) => {
        const params = new URLSearchParams(
            Array.from(searchParams.entries()).filter((item) => item[0] !== key)
        );
        value.forEach((item) => params.append(key, serializer(item)));
        replace(`${pathname}?${params}`);
    };
    return [value, setValue];
}
