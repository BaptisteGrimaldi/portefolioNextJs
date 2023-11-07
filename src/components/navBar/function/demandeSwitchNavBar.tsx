type Props = {
    visible: boolean;
    switchNavBar: () => void;
};
export function demandeSwitchNavBar(props: Props) {
    props.switchNavBar();
}
