"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const passport_1 = require("./config/passport");
const db_1 = __importDefault(require("./config/db"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const express_session_1 = __importDefault(require("express-session"));
const passport_2 = __importDefault(require("passport"));
const auth_1 = __importDefault(require("./routes/auth"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || '8000';
app.use((0, morgan_1.default)('dev'));
app.use(body_parser_1.default.json());
app.use((0, express_session_1.default)({ secret: 'SECRET', resave: true, saveUninitialized: true }));
app.use((0, cors_1.default)());
app.use(passport_2.default.initialize());
passport_2.default.use(passport_1.JWTstrategy);
const apiRoutes = (0, express_1.default)();
apiRoutes.use(auth_1.default);
app.use('/api/', apiRoutes);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield models_1.Admin.create({
        email: 'ajcpwnz@d3feat.website',
        password: 'MYPASSWORD',
        display_name: 'alex'
    });
    res.send('Express + TypeScript Server' + JSON.stringify(admin));
}));
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default.sync();
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
}));
