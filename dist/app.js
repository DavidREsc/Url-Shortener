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
const express_1 = __importDefault(require("express"));
const validateUrl_1 = __importDefault(require("./middleware/validateUrl"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const cors_1 = __importDefault(require("cors"));
const path = require('path');
const app = express_1.default();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use(cors_1.default());
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path.join(__dirname, '../client/build')));
}
app.post('/', validateUrl_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { urlInput } = req.body;
        console.log(urlInput);
        const response = yield node_fetch_1.default(`http://api.shrtco.de/v2/shorten?url=${urlInput}`);
        const shortendUrl = yield response.json();
        res.send(shortendUrl);
    }
    catch (e) {
        res.status(500).send();
    }
}));
app.get('/*', (req, res) => {
    res.sendFile('client/build/index.html', { root: __dirname });
});
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
//# sourceMappingURL=app.js.map