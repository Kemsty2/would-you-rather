import polls from './polls';
import login from "./login";

const constraints = {
    ...polls,
    ...login
};

export default constraints;