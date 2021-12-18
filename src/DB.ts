import OrnamentData from "./OrnamentData";
import { v4 as uuidv4 } from "uuid";
import JSONdb from "simple-json-db";

const dbPath = "D:\\Dev\\wubby-tree-server\\data\\db.json";

class DB {
  private db = new JSONdb(dbPath);

  addOrnament(ornament: OrnamentData): OrnamentData {
    const newOrnament = { ...ornament };
    newOrnament.id = uuidv4();
    this.db.set(newOrnament.id, newOrnament);
    return { ...newOrnament };
  }

  removeOrnament(id: string) {
    this.db.delete(id);
  }

  updateOrnament(id: string, ornament: OrnamentData) {
    this.db.set(id, ornament);
  }

  getOrnaments(): OrnamentData[] {
    return Object.values(this.db.JSON());
  }
}

export default DB;
