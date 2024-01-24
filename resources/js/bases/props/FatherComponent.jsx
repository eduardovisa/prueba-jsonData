import { ChildrenComponent } from "./ChildrenComponent";

export const FatherComponent = () => {
    return (
        <>
            <h1>Father Component</h1>
            <ChildrenComponent btnText="submit" />
        </>
    );
};
