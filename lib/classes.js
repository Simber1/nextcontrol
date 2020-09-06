/*
 *  NextControl library of commonly used classes
 *  
 */

/**
 * Game Server Version information
 */
export class ServerVersion {

    constructor(struct) {
        this.name = struct.Name;
        this.title = struct.TitleId;
        this.version = struct.Version;
        this.build = struct.Build;
        this.apiVersion = struct.ApiVersion;
    }
}

/**
 * Map medals object
 */
export class Medals {

    constructor(b, s, g, a)
    {
        this.bronze = b;
        this.silver = s;
        this.gold = g;
        this.author = a;
    }

    reachedMedal(time) {
        if (time > silver && time <= bronze) return 'bronze';
        if (time > gold && time <= silver) return 'silver';
        if (time > author && time <= gold) return 'gold';
        if (time <= author) return 'author';
        return false;
    }
}


export class Map {

    constructor(struct) {
        this.uid = struct.Uid;
        this.name = struct.Name;
        this.file = struct.FileName;
        this.author = structAuthor;
        this.envi = struct.Environnement;
        this.mood = struct.Mood;
        this.medals = new Medals(struct.BronzeTime, struct.SilverTime, struct.GoldTime, struct.AuthorTime);
        this.coppers = Number(struct.CopperPrice);
        this.isMultilap = Boolean(struct.LapRace);
        this.nbLaps = Number(struct.NbLaps);
        this.nbCheckpoints = Number(struct.NbCheckpoints);
        this.type = struct.MapType;
        this.style = struct.MapStyle;
        this.tmxid = -1;
    } 

    setTMXId(id) { this.tmxid = id }
}

/**
 * Server Status information
 */
export class ServerStatus {
    /**
     * Constructs server status info object
     * @param struct status struct returned from server
     */
    constructor(struct) {
        this.code = struct.Code;
        this.name = struct.Name;
    }
}

/**
 * Call Vote information
 */
export class CallVote {
    /**
     * Constructs call vote status from server struct
     * @param struct call vote struct returned from server
     */
    constructor(struct) {
        this.login = struct.CallerLogin;
        this.command = struct.CmdName;
        this.parameter = struct.CmdParam;
    }

    /**
     * Constructs call vote status from callback parameters
     * @param params callback parameters
     */
    static fromCallback(params) {
        return new CallVote ({
            CallerLogin: params[1],
            CmdName: params[2],
            CmdParam: params[3]
        });
    }
}

/**
 * Object for ChatSendServerMessageToLanguage method's parameter array
 */
export class LanguageMessage {
    /**
     * @param lang Message language
     * @param text Message content
     */
    constructor(lang, text) {
        this.lang = lang;
        this.text = text;
    }
}

/**
 * Player Info as returned from server
 */
export class PlayerInfo {
    /**
     * Constructs player info from returned struct
     * @param struct struct returned from server
     */
    constructor(struct) {
        this.login = struct.Login;
        this.name = struct.NickName;
    }
}
/**
 * 
 */
export class PlayerRanking {
    /**
     * Constructs player ranking from returend struct
     * @param struct struct returned from server
     */
    constructor(struct) {
        this.login = struct.Login;
        this.name = struct.NickName;
        this.rank = struct.Rank;
        this.bestTime = struct.BestTime;
        this.bestCheckpoints = struct.BestCheckpoints;
        this.score = struct.Score;
        this.nbLaps = struct.NbrLapsFinished;
        this.ladderScore = struct.LadderScore;
    }   
}