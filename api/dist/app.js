"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const stuff_1 = __importDefault(require("./routes/stuff"));
const app = express_1.default();
const options = {
    origin: ["http://localhost:3000"],
};
app.use(cors_1.default(options));
app.use(express_1.default.json());
app.use("/stuff", stuff_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map