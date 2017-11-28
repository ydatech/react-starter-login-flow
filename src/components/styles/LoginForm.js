export default theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    progress: {
        margin: `0 ${theme.spacing.unit * 2}px`,
    },
    loginBodyWrap: {
        display: 'flex',
        width: 100,
        height: 100,
    },
    loginBodyWrapForm: {
        alignItems: 'center',
    },
    button: {
        marginRight: 15,
    },
});