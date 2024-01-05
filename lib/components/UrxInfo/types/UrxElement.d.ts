export type ListItemType = {
    picto: string;
    title: string;
    body: string;
};
export type UrxElementType = {
    type: string;
    id: string;
    attributes: {
        content: ListItemType[] | string;
        withIcon: boolean;
        image?: string;
        defaultContent?: string;
    };
};
