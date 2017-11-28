
export default theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        position: 'relative',
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    loginWrap: {
        width: '100%',
        height: '100%',
    },
    loginBody: {
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    loginBodyLeft: {
        width: '60%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginBodyRight: {
        width: '40%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.blueGrey[50],
    },
});