class NeigongGrouping {
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
        this.allShaolinLines = this.getLinesFor("ng_sl_");
        this.allWudangLines = this.getLinesFor("ng_wd_");
        this.allEmeiLines = this.getLinesFor("ng_em_");
        this.allBeggarLines = this.getLinesFor("ng_gb_")
        this.allRoyalguardLines = this.getLinesFor("ng_jy_")
        this.allScholarLines = this.getLinesFor("ng_jz_")
        this.allWandererLines = this.getLinesFor("ng_jl_")
        this.allTangmenLines = this.getLinesFor("ng_tm_")
        this.allMingLines = this.getLinesFor("ng_mj_")
        this.allTianshanLines = this.getLinesFor("ng_ts_")
        this.allKunlunLines = this.getLinesFor("ng_kl_")
        this.allXingtianLines = this.getLinesFor("ng_xt_")
        this.allDamoLines = this.getLinesFor("ng_dm_")
        this.allAncientTombLines =this.getLinesFor("ng_gm_")
        this.allDivineWaterLines = this.getLinesFor("ng_ssg_")
        this.allEscortLines = this.getLinesFor("ng_cf_")
        this.allBloodBladeLines = this.getLinesFor("ng_xd_")
        this.allHuashanLines = this.getLinesFor("ng_hs_")
        this.allFiveVenomLines = this.getLinesFor("ng_wxj_")
        this.allNianluoLines = this.getLinesFor("ng_nlb_")
        this.allShenjiLines = this.getLinesFor("ng_sjy_")
        this.allStarPavillionLines = this.getLinesFor("ng_xmg_")
        this.allTianyaLines = this.getLinesFor("ng_tyhg_")
        this.allWanghuiLines = this.getLinesFor("ng_wh_")
        this.allXuLines = this.getLinesFor("ng_xjz_")
        this.allShenLines = this.getLinesFor("ng_sj_")
        this.allHundredBeastsLines = this.getLinesFor("ng_jh_lhbwq")
        this.allForemostPavillionLines = this.getLinesFor("ng_th_")
        this.allRootlessLines = this.getLinesFor("ng_wg_")
        this.allMovingFlowersLines = this.getLinesFor("ng_yh_")
        this.allTianlunLines = this.getLinesFor("ng_tls_")
        this.allQingyiLines = this.getLinesFor("ng_qy_")
        this.allJianghuLines = this.getLinesFor("ng_jh_")
        alert('Done!!!')
    }

    generateFileOutput(){
        let fileContents = []
        fileContents.push(
`9Yin Neigongs ordering app by Vajra Pokaew, 2024
--------------------------------------------
    Neigongs will be grouped by schools and mark by school name by this order.
Shaolin, Wudang, Emei, Beggar, Royalguard, Scholar, Wanderer, Tang, Ming, Tianshan, Kunlun, Xingtian,
Damo, Ancient tomb, Divine Water, Escort, Blood Blade, Huashab, Five Venom, Nianluo, Shenji, Star Pavillion, Tianya, Wanghui, 
Xu, Shen, Hundred Beasts, Foremost Pavillion, Rootless, Moving Flowers, Tianlun, Qingyi, and Jianghu.
--------------------------------------------
            `,
            '//Other lines', 
            ...this.allLines,
            `
            
            `,
            '//Shaolin Neigongs',
            ...this.allShaolinLines,
            `
            
            `,
            '//Wudang Neigongs',
            ...this.allWudangLines,
            `
            
            `,
            '//Emei Neigongs',
            ...this.allEmeiLines,
            `
            
            `,
            '//Beggar Neigongs',
            ...this.allBeggarLines,
            `
            
            `,
            '//Royalguard Neigongs',
            ...this.allRoyalguardLines,
            `
            
            `,
            '//Scholar Neigongs',
            ...this.allScholarLines,
            `
            
            `,
            '//Wanderer Neigongs',
            ...this.allWandererLines,
            `
            
            `,
            '//Tang Neigongs',
            ...this.allTangmenLines,
            `
            
            `,
            '//Ming Neigongs',
            ...this.allMingLines,
            `
            
            `,
            '//Tianshan Neigongs',
            ...this.allTianshanLines,
            `
            
            `,
            '//Kunlun Neigongs',
            ...this.allKunlunLines,
            `
            
            `,
            '//Xingtian Neigongs',
            ...this.allXingtianLines,
            `
            
            `,
            '//Damo Neigongs',
            ...this.allDamoLines,
            `
            
            `,
            '//Ancient tomb Neigongs',
            ...this.allAncientTombLines,
            `
            
            `,
            '//Divine Water Neigongs',
            ...this.allDivineWaterLines,
            `
            
            `,
            '//Escort Neigongs',
            ...this.allEscortLines,
            `
            
            `,
            '//Blood Blade Neigongs',
            ...this.allBloodBladeLines,
            `
            
            `,
            '//Huashan Neigongs',
            ...this.allHuashanLines,
            `
            
            `,
            '//Five Venom Neigongs',
            ...this.allFiveVenomLines,
            `
            
            `,
            '//Nianluo Neigongs',
            ...this.allNianluoLines,
            `
            
            `,
            '//Shenji Neigongs',
            ...this.allShenjiLines,
            `
            
            `,
            '//Star Pavillion Neigongs',
            ...this.allStarPavillionLines,
            `
            
            `,
            '//Tianya Neigongs',
            ...this.allTianyaLines,
            `
            
            `,
            '//Wanghui Neigongs',
            ...this.allWanghuiLines,
            `
            
            `,
            '//Xu Neigongs',
            ...this.allXuLines,
            `
            
            `,
            '//Shen Neigongs',
            ...this.allShenLines,
            `
            
            `,
            '//Hundred Beasts Neigongs',
            ...this.allHundredBeastsLines,
            `
            
            `,
            '//Foremost Pavillion Neigongs',
            ...this.allForemostPavillionLines,
            `
            
            `,
            '//Rootless Neigongs',
            ...this.allRootlessLines,
            `
            
            `,
            '//Moving Flowers Neigongs',
            ...this.allMovingFlowersLines,
            `
            
            `,
            '//Tianlun Neigongs',
            ...this.allTianlunLines,
            `
            
            `,
            '//Qingyi Neigongs',
            ...this.allQingyiLines,
            `
            
            `,
            '//Jianghu Neigongs',
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
