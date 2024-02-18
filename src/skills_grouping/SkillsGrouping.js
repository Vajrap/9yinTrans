class SkillGrouping {
    constructor() {
        this.allLines = []
        this.allShaolinLines = []
        this.allWudangLines = []
        this.allEmeiLines = []
        this.allBeggarLines = []
        this.allRoyalguardLines = []
        this.allScholarLines = []
        this.allWandererLines = []
        this.allTangmenLines = []
        this.allMingLines = []
        this.allTianshanLines = []
        this.allKunlunLines = []
        this.allXingtianLines = []
        this.allDamoLines = []
        this.allAncientTombLines =[]
        this.allDivineWaterLines = []
        this.allEscortLines = []
        this.allBloodBladeLines = []
        this.allHuashanLines = []
        this.allFiveVenomLines = []
        this.allNianluoLines = []
        this.allShenjiLines = []
        this.allStarPavillionLines = []
        this.allTianyaLines = []
        this.allWanghuiLines = []
        this.allXuLines = []
        this.allShenLines = []
        this.allHundredBeastsLines = []
        this.allForemostPavillionLines = []
        this.allRootlessLines = []
        this.allMovingFlowersLines = []
        this.allTianlunLines = []
        this.allQingyiLines = []
        this.allJianghuLines = []
    }

    getAllLinesFromInputFile(file){
        const reader = new FileReader();
        reader.onload = () => {
            this.allLines.push (...reader.result.split('\n'));
        }
        reader.readAsText(file);
    }

    getLinesFor(subString) {
        const remainingLines = [];
        const matchingLines = [];
        
        for (const line of this.allLines) {
            const [identifier] = line.split("=");
            if (identifier.includes(subString)) {
                matchingLines.push(line)
            } else {
                remainingLines.push(line)
            }
        }
        this.allLines = remainingLines;
        matchingLines.sort((a,b) => {
            const [idA] = a.split("=");
            const [idB] = b.split("=");
            return idA.localeCompare(idB)
        })
        return matchingLines;
    }

    populateGroupLines() {
        this.allShaolinLines = this.getLinesFor("_CS_sl_");
        this.allWudangLines = this.getLinesFor("_CS_wd_");
        this.allEmeiLines = this.getLinesFor("_CS_em_");
        this.allBeggarLines = this.getLinesFor("_CS_gb_")
        this.allRoyalguardLines = this.getLinesFor("_CS_jy_")
        this.allScholarLines = this.getLinesFor("_CS_jz_")
        this.allWandererLines = this.getLinesFor("_CS_jl_")
        this.allTangmenLines = this.getLinesFor("_CS_tm_")
        this.allMingLines = this.getLinesFor("_CS_mj_")
        this.allTianshanLines = this.getLinesFor("_CS_ts_")
        this.allKunlunLines = this.getLinesFor("_CS_kl_")
        this.allXingtianLines = this.getLinesFor("_CS_xt_")
        this.allDamoLines = this.getLinesFor("_CS_dm_")
        this.allAncientTombLines =this.getLinesFor("_CS_gm_")
        this.allDivineWaterLines = this.getLinesFor("_CS_ssg_")
        this.allEscortLines = this.getLinesFor("_CS_cf_")
        this.allBloodBladeLines = this.getLinesFor("_CS_xd_")
        this.allHuashanLines = this.getLinesFor("_CS_hs_")
        this.allFiveVenomLines = this.getLinesFor("_CS_wxj_")
        this.allNianluoLines = this.getLinesFor("_CS_nlb_")
        this.allShenjiLines = this.getLinesFor("_CS_sjy_")
        this.allStarPavillionLines = this.getLinesFor("_CS_xmg_")
        this.allTianyaLines = this.getLinesFor("_CS_tyhg_")
        this.allWanghuiLines = this.getLinesFor("_CS_wh_")
        this.allXuLines = this.getLinesFor("_CS_xjz_")
        this.allShenLines = this.getLinesFor("_CS_sj_")
        this.allHundredBeastsLines = this.getLinesFor("_CS_jh_lhbwq")
        this.allForemostPavillionLines = this.getLinesFor("_CS_th_")
        this.allRootlessLines = this.getLinesFor("_CS_jh_bxjf")
        this.allMovingFlowersLines = this.getLinesFor("_CS_yh_")
        this.allTianlunLines = this.getLinesFor("_CS_tls_")
        this.allQingyiLines = this.getLinesFor("_CS_qy_")
        this.allJianghuLines = this.getLinesFor("_CS_jh_")
        alert('Done!!!')
    }

    generateFileOutput(){
        let fileContents = []
        fileContents.push(
`9Yin skill ordering app by Vajra Pokaew, 2024
--------------------------------------------
    Skills will be grouped by schools and mark by school name by this order.
Shaolin, Wudang, Emei, Beggar, Royalguard, Scholar, Wanderer, Tang, Ming, Tianshan, Kunlun, Xingtian,
Damo, Ancient tomb, Divine Water, Escort, Blood Blade, Huashab, Five Venom, Nianluo, Shenji, Star Pavillion, Tianya, Wanghui, 
Xu, Shen, Hundred Beasts, Foremost Pavillion, Rootless, Moving Flowers, Tianlun, Qingyi, and Jianghu.
--------------------------------------------
            `,
            '//Other lines', 
            ...this.allLines,
            `
            
            `,
            '//Shaolin skills',
            ...this.allShaolinLines,
            `
            
            `,
            '//Wudang skills',
            ...this.allWudangLines,
            `
            
            `,
            '//Emei skills',
            ...this.allEmeiLines,
            `
            
            `,
            '//Beggar skills',
            ...this.allBeggarLines,
            `
            
            `,
            '//Royalguard skills',
            ...this.allRoyalguardLines,
            `
            
            `,
            '//Scholar skills',
            ...this.allScholarLines,
            `
            
            `,
            '//Wanderer skills',
            ...this.allWandererLines,
            `
            
            `,
            '//Tang skills',
            ...this.allTangmenLines,
            `
            
            `,
            '//Ming skills',
            ...this.allMingLines,
            `
            
            `,
            '//Tianshan skills',
            ...this.allTianshanLines,
            `
            
            `,
            '//Kunlun skills',
            ...this.allKunlunLines,
            `
            
            `,
            '//Xingtian skills',
            ...this.allXingtianLines,
            `
            
            `,
            '//Damo skills',
            ...this.allDamoLines,
            `
            
            `,
            '//Ancient tomb skills',
            ...this.allAncientTombLines,
            `
            
            `,
            '//Divine Water skills',
            ...this.allDivineWaterLines,
            `
            
            `,
            '//Escort skills',
            ...this.allEscortLines,
            `
            
            `,
            '//Blood Blade skills',
            ...this.allBloodBladeLines,
            `
            
            `,
            '//Huashan skills',
            ...this.allHuashanLines,
            `
            
            `,
            '//Five Venom skills',
            ...this.allFiveVenomLines,
            `
            
            `,
            '//Nianluo skills',
            ...this.allNianluoLines,
            `
            
            `,
            '//Shenji skills',
            ...this.allShenjiLines,
            `
            
            `,
            '//Star Pavillion skills',
            ...this.allStarPavillionLines,
            `
            
            `,
            '//Tianya skills',
            ...this.allTianyaLines,
            `
            
            `,
            '//Wanghui skills',
            ...this.allWanghuiLines,
            `
            
            `,
            '//Xu skills',
            ...this.allXuLines,
            `
            
            `,
            '//Shen skills',
            ...this.allShenLines,
            `
            
            `,
            '//Hundred Beasts skills',
            ...this.allHundredBeastsLines,
            `
            
            `,
            '//Foremost Pavillion skills',
            ...this.allForemostPavillionLines,
            `
            
            `,
            '//Rootless skills',
            ...this.allRootlessLines,
            `
            
            `,
            '//Moving Flowers skills',
            ...this.allMovingFlowersLines,
            `
            
            `,
            '//Tianlun skills',
            ...this.allTianlunLines,
            `
            
            `,
            '//Qingyi skills',
            ...this.allQingyiLines,
            `
            
            `,
            '//Jianghu skills',
            ...this.allJianghuLines,
        )
    
        const fileContentString = fileContents.join('\n');

        const fileBlob = new Blob([fileContentString], { type: 'text/plain' });

        const fileURL = URL.createObjectURL(fileBlob);

        const downloadLink = document.createElement('a');
        downloadLink.href = fileURL;
        downloadLink.download = 'skill_lines.idres';
        document.body.appendChild(downloadLink);
        downloadLink.click();

        URL.revokeObjectURL(fileURL);
    document.body.removeChild(downloadLink);
    }
}
