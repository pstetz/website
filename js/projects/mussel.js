(function(){
    window.PLOTLYENV={'BASE_URL': 'https://plot.ly'};

    var gd1 = document.getElementById('mussel_num_studies')
    var gd2 = document.getElementById('mussel_num_substances')
    var gd3 = document.getElementById('mussel_before_after')
    var resizeDebounce = null;
    
    Plotly.plot(gd1, {
        data: [{"uid": "550203", "ysrc": "pstetz17:0:a155d2", "xsrc": "pstetz17:0:004993", "mode": "lines+marker", "y": [4290, 4301, 4209, 4803, 8022, 21190, 62000, 25417, 27981, 33923, 40334, 42950, 36210, 33895, 33171, 50465, 25689, 10090, 38206, 35929, 25104, 61240, 28562, 29033, 24576, 17438, 15568, 8562, 10857, 5547], "x": [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], "type": "scatter"}],
        layout: {"title": "Number of studies over the years", "breakpoints": [], "xaxis": {"tickfont": {"family": "Arial", "size": 12}, "showticklabels": true, "tickmode": "linear", "ticks": "outside", "range": [1986, 2015], "linewidth": 2, "type": "linear", "autorange": true}, "yaxis": {"range": [998.3888888888878, 65210.61111111111], "type": "linear", "autorange": true}},
        frames: [],
        config: {"mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A"}
    });

    Plotly.plot(gd2, {
        data: [{"uid": "a4c9be", "ysrc": "pstetz17:2:7738b0", "xsrc": "pstetz17:2:a78937", "y": [766.6666667000001, 1295, 1294.6666667, 833.6666667, 2163.16666665, 11500, 1823.83333335, 12885, 2795, 680, 775, 1300, 3250, 1140, 2225, 2095, 0, 1610, 0, 1150, 1080, 950, 1970, 2500, 0, 1320, 1280, 860.5], "x": [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014], "type": "scatter", "name": "Tin"}, {"uid": "fd589f", "ysrc": "pstetz17:2:db6cb8", "xsrc": "pstetz17:2:a78937", "y": [40, 51.6666667, 42, 32.3333333, 112, 257, 93.00000000000001, 190, 49.55, 45, 51, 30, 98, 50, 280, 119.5, 30, 100.5, 0, 30.900000000000002, 36.6, 29.4, 51, 49.7, 1.65, 22.1, 30.75, 5.050000000000001], "x": [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014], "type": "scatter", "name": "Mercury"}, {"uid": "f81295", "ysrc": "pstetz17:2:9f231d", "xsrc": "pstetz17:2:a78937", "y": [0, 620.83333335, 301, 178.6666667, 662, 640, 0, 482.14399364999997, 218.5, 270, 251, 270, 410, 410, 208.5, 529, 180, 449.5, 150, 278, 181.00000000000003, 278.99999999999994, 258, 437.99999999999994, 136, 0, 313, 0], "x": [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014], "type": "scatter", "name": "Selenium"}, {"uid": "e8d293", "ysrc": "pstetz17:2:953377", "xsrc": "pstetz17:2:a78937", "y": [55000, 54333.333333, 78953, 26762.666666999998, 91023.333333, 171125, 87100, 91702.397056, 74300, 59800, 45000, 65000, 80400, 71800, 125095, 108985, 58000, 63000, 4045, 49000, 60100, 54700, 66710, 102000, 11100, 83200, 66050, 50950], "x": [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014], "type": "scatter", "name": "Zinc"}, {"uid": "d39425", "ysrc": "pstetz17:2:bb9eb5", "xsrc": "pstetz17:2:a78937", "y": [10333.333332999999, 16433.3333335, 11453.333333, 2892.3333333, 15847.833332999999, 30500, 12900, 16100.000000000002, 16215, 5400, 3840, 25000, 30200, 23900, 88325, 32192.5, 42000, 16150, 5135, 10600, 15100, 10900, 40784, 5080, 5080, 23600, 10940, 7695], "x": [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014], "type": "scatter", "name": "Nickel"}, {"uid": "76f7b1", "ysrc": "pstetz17:2:43d4bd", "xsrc": "pstetz17:2:a78937", "y": [13333333.333, 18716666.667, 17566666.667, 6883333.3333, 17311886.833499998, 3225000, 600000, 3310000, 19553500, 9096000, 6763500, 27600000, 24800000, 23100000, 47250000, 37840230, 3200, 22150000, 2460000, 13000000, 24300000, 29500000, 31152000, 25800000, 2210000, 36700000, 31750000, 31250000], "x": [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014], "type": "scatter", "name": "Iron"}, {"uid": "d61d29", "ysrc": "pstetz17:2:531f77", "xsrc": "pstetz17:2:a78937", "y": [5333.3333333, 5466.666666700001, 4379, 3150, 7063, 6900, 4600, 10600, 10570, 6800, 6370, 6327.999999999999, 7560, 7470, 10045, 8930, 4700, 6365, 0, 7140, 6560, 7830, 5620, 6810, 1335, 6170, 8940, 8315], "x": [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014], "type": "scatter", "name": "Arsenic"}, {"uid": "7297c8", "ysrc": "pstetz17:2:f09b0b", "xsrc": "pstetz17:2:9ca545", "y": [0.06333333334999999, 0.0466666667, 0.3195, 0.73233333335, 1.08816666665, 1.532, 0, 0.1507724535, 0, 0.01, 0.03, 0, 0, 0, 0.2, 0.16, 0.14, 0.2075, 0.11, 0.02, 0, 0, 0, 0.085, 0, 0, 0], "x": [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013, 2014], "type": "scatter", "name": "DDT"}, {"uid": "4c8687", "ysrc": "pstetz17:2:f6beea", "xsrc": "pstetz17:2:a78937", "y": [43666666.66700001, 42666666.66700001, 39771333.333, 11906000, 36888746, 5717500, 28000000, 15500000, 22450000, 4311000, 4443000, 38889000, 29900000, 25600000, 66552000, 67615000, 7300, 48300000, 2880000, 30000000, 48000000, 44700000, 52365000, 33600000, 3585000, 50400000, 62500000, 65500000], "x": [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014], "type": "scatter", "name": "Aluminum"}, {"uid": "d7e506", "ysrc": "pstetz17:2:ac7cc3", "xsrc": "pstetz17:2:1d65b2", "y": [0.08, 0.16999999999999998, 0.12883333335, 8.25, 14.563333333, 133.81, 0, 34.522708965999996, 3, 4.2, 3.3, 10.57, 11.23, 12, 10.6, 10.2, 2.4, 2.7616666667, 3.8, 1.9, 2.5, 0.4, 1.4, 1.5, 3.76, 1.9605, 0.5710000000000001, 0.494, 0.16699999999999998, 20.6], "x": [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], "type": "scatter", "name": "PAH"}, {"uid": "e5c814", "ysrc": "pstetz17:2:17796b", "xsrc": "pstetz17:2:a78937", "y": [313333.33333, 312500, 250977.66666999998, 40721, 115682, 589000, 154000, 267500, 394500, 40620, 50950, 414000, 404000, 393000, 520340, 490675, 402000, 289000, 82900, 254000, 420000, 530000, 402000, 149000, 45300, 684000, 482000, 627000], "x": [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014], "type": "scatter", "name": "Manganese"}, {"uid": "11c189", "ysrc": "pstetz17:2:9e689f", "xsrc": "pstetz17:2:a78937", "y": [9666.666666699999, 11333.333333499999, 11818, 4570, 18080.6666665, 72700, 26100, 27300, 15950, 11200, 9700, 15400, 28300, 32900, 41895, 30117, 12100, 18550, 2380, 9730, 15500, 36900, 29500, 48600, 3750, 20500, 19350, 9120], "x": [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014], "type": "scatter", "name": "Copper"}, {"uid": "7d7fce", "ysrc": "pstetz17:2:e969cf", "xsrc": "pstetz17:2:a78937", "y": [44333.333333, 47666.6666665, 46333.333333, 24333.333333000002, 49698.333333, 89000, 45800, 62150, 52800, 24580, 16885, 40575, 49300, 38100, 140805, 72328.5, 140000, 62000, 11200, 26800, 28400, 21700, 71500, 28800, 11350, 61200, 43050, 25600], "x": [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014], "type": "scatter", "name": "Chromium"}, {"uid": "830be9", "ysrc": "pstetz17:2:8b8d51", "xsrc": "pstetz17:2:9ca545", "y": [0.02, 0.013333333300000002, 0.12066666665, 0.31216666670000004, 0.03883333335, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.02, 0.01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "x": [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013, 2014], "type": "scatter", "name": "Organochloride insecticides"}, {"uid": "6dc318", "ysrc": "pstetz17:2:73b007", "xsrc": "pstetz17:2:3f9722", "y": [0.23466666664999997, 0.5455, 1.227, 0, 0, 0, 0.07, 0.09, 0, 0, 0, 0.2, 0.15, 0.04, 0.03, 0, 0, 0, 0, 0, 0.2, 0, 0, 0], "x": [1988, 1989, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013, 2014], "type": "scatter", "name": "PCB"}, {"uid": "98a2ca", "ysrc": "pstetz17:2:cbe62d", "xsrc": "pstetz17:2:07314f", "y": [500, 120, 71, 0, 240, 200, 227, 359.5, 400], "x": [1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002], "type": "scatter", "name": "Thallium"}, {"uid": "187dde", "ysrc": "pstetz17:2:a9416f", "xsrc": "pstetz17:2:a78937", "y": [123.3333333, 147.5, 155.6666667, 187.6666667, 184.33333335, 790, 170, 275, 206, 80, 70, 1.4, 290, 240, 200, 210, 420, 155.5, 0, 159, 0, 0, 0, 105, 0, 90.1, 107.15, 55.150000000000006], "x": [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014], "type": "scatter", "name": "Cadmium"}, {"uid": "c872e5", "ysrc": "pstetz17:2:6757bb", "xsrc": "pstetz17:2:a78937", "y": [86.66666670000001, 85.5, 95, 86.66666670000001, 129.61316664999998, 840, 210, 135, 50, 110, 91.5, 48, 88.00000000000001, 250, 170, 148.5, 150, 120, 0, 50.4, 97.8, 99.7, 61.5, 0, 0, 0, 0, 0], "x": [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014], "type": "scatter", "name": "Silver"}, {"uid": "42aa43", "ysrc": "pstetz17:2:18e2b8", "xsrc": "pstetz17:2:2f8012", "y": [740, 480, 115, 620, 390, 455, 200, 450, 150, 555, 410, 450, 315, 86.65, 462.99999999999994, 427.0000000000001, 278.99999999999994, 73.7, 355, 0, 332, 629, 458], "x": [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014], "type": "scatter", "name": "Antimony"}, {"uid": "68aa79", "ysrc": "pstetz17:2:72577e", "xsrc": "pstetz17:2:a78937", "y": [15333.333332999999, 16666.6666665, 16245.999999999998, 13025.666667000001, 33074.166667, 58700, 21500, 39350, 15350, 16200, 14635, 8530, 22000, 15200, 23970, 21505, 10300, 23200, 1200, 15700, 9830, 7530, 4345, 17900, 819.5, 11000, 7835, 5875], "x": [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014], "type": "scatter", "name": "Lead"}],
        layout: {"showlegend": false, "title": "Substance levels over time", "yaxis": {"range": [-4239280.559314389, 71396804.23996392], "type": "linear", "autorange": true}, "updatemenus": [{"y": 1, "x": -0.15, "active": -1, "buttons": [{"args": [{"visible": [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]}, {"title": "Tin Levels"}], "method": "update", "label": "Tin"}, {"args": [{"visible": [false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]}, {"title": "Mercury Levels"}], "method": "update", "label": "Mercury"}, {"args": [{"visible": [false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]}, {"title": "Selenium Levels"}], "method": "update", "label": "Selenium"}, {"args": [{"visible": [false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]}, {"title": "Zinc Levels"}], "method": "update", "label": "Zinc"}, {"args": [{"visible": [false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]}, {"title": "Nickel Levels"}], "method": "update", "label": "Nickel"}, {"args": [{"visible": [false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false]}, {"title": "Iron Levels"}], "method": "update", "label": "Iron"}, {"args": [{"visible": [false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false]}, {"title": "Arsenic Levels"}], "method": "update", "label": "Arsenic"}, {"args": [{"visible": [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false]}, {"title": "DDT Levels"}], "method": "update", "label": "DDT"}, {"args": [{"visible": [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false]}, {"title": "Aluminum Levels"}], "method": "update", "label": "Aluminum"}, {"args": [{"visible": [false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false]}, {"title": "PAH Levels"}], "method": "update", "label": "PAH"}, {"args": [{"visible": [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false]}, {"title": "Manganese Levels"}], "method": "update", "label": "Manganese"}, {"args": [{"visible": [false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false]}, {"title": "Copper Levels"}], "method": "update", "label": "Copper"}, {"args": [{"visible": [false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false]}, {"title": "Chromium Levels"}], "method": "update", "label": "Chromium"}, {"args": [{"visible": [false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false]}, {"title": "Organochloride insecticides Levels"}], "method": "update", "label": "Organochloride insecticides"}, {"args": [{"visible": [false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false]}, {"title": "PCB Levels"}], "method": "update", "label": "PCB"}, {"args": [{"visible": [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false]}, {"title": "Thallium Levels"}], "method": "update", "label": "Thallium"}, {"args": [{"visible": [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false]}, {"title": "Cadmium Levels"}], "method": "update", "label": "Cadmium"}, {"args": [{"visible": [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false]}, {"title": "Silver Levels"}], "method": "update", "label": "Silver"}, {"args": [{"visible": [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false]}, {"title": "Antimony Levels"}], "method": "update", "label": "Antimony"}, {"args": [{"visible": [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true]}, {"title": "Lead Levels"}], "method": "update", "label": "Lead"}]}], "height": 800, "width": 800, "xaxis": {"range": [1986, 2015], "type": "linear", "autorange": true}, "breakpoints": []},
        frames: [],
        config: {"mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A"}
    });

	Plotly.plot(gd3, {
        data: [{"uid": "c47c6a", "yaxis": "y", "ysrc": "pstetz17:4:964a90", "xsrc": "pstetz17:4:87d934", "xaxis": "x", "y": [371000, 7800, 3453.3333333500004, 722.66666665, 115340, 1.4035, 359000, 600, 16383.3333335, 92.5, 1828.33333335, 0.48, 5.7533333333000005, 0.8, 2968.33333335, 1750, 66.66666670000001, 1635500], "x": ["Aluminum", "Arsenic", "Cadmium", "Chromium", "Copper", "DDT", "Iron", "Lead", "Manganese", "Mercury", "Nickel", "Organochloride insecticides", "PAH", "PCB", "Selenium", "Silver", "Tin", "Zinc"], "type": "bar", "name": "Before 2001"}, {"uid": "837c00", "yaxis": "y", "ysrc": "pstetz17:4:9cfe90", "xsrc": "pstetz17:4:4db1d1", "xaxis": "x", "y": [154000, 7600, 2730, 1370, 7180, 477000, 210, 12900, 67, 1190, 0.4, 1960, 436, 163000], "x": ["Aluminum", "Arsenic", "Cadmium", "Chromium", "Copper", "Iron", "Lead", "Manganese", "Mercury", "Nickel", "PAH", "Selenium", "Silver", "Zinc"], "type": "bar", "name": "Before 2001"}, {"uid": "ff58f7", "yaxis": "y", "ysrc": "pstetz17:4:6a7376", "xsrc": "pstetz17:4:50f438", "xaxis": "x", "y": [20600000, 380, 6900, 160, 46000, 18800, 15500000, 17300, 341000, 62, 18900, 7.83, 296.6666667, 120, 150, 1600, 73483], "x": ["Aluminum", "Antimony", "Arsenic", "Cadmium", "Chromium", "Copper", "Iron", "Lead", "Manganese", "Mercury", "Nickel", "PAH", "Selenium", "Silver", "Thallium", "Tin", "Zinc"], "type": "bar", "name": "Before 2001"}, {"uid": "16d299", "yaxis": "y", "ysrc": "pstetz17:4:f1e160", "xsrc": "pstetz17:4:b29b4a", "xaxis": "x", "y": [161500, 7290, 2860, 880.9999999999999, 58950, 0.485, 349500, 643, 19300, 80.35, 2480, 2.3, 0.06, 3120, 959, 146, 770500], "x": ["Aluminum", "Arsenic", "Cadmium", "Chromium", "Copper", "DDT", "Iron", "Lead", "Manganese", "Mercury", "Nickel", "PAH", "PCB", "Selenium", "Silver", "Tin", "Zinc"], "type": "bar", "name": "After 2001"}, {"uid": "9c46d9", "yaxis": "y", "ysrc": "pstetz17:4:1cc365", "xsrc": "pstetz17:4:39ac1b", "xaxis": "x", "y": [11860, 2590, 14.85, 55, 2855, 0.685, 154000, 55, 4305, 145.5, 90.5, 0.26, 1350, 9.5, 77850], "x": ["Aluminum", "Arsenic", "Cadmium", "Chromium", "Copper", "DDT", "Iron", "Lead", "Manganese", "Mercury", "Nickel", "PCB", "Selenium", "Silver", "Zinc"], "type": "bar", "name": "After 2001"}, {"uid": "760a56", "yaxis": "y", "ysrc": "pstetz17:4:914691", "xsrc": "pstetz17:4:137526", "xaxis": "x", "y": [46350000, 350, 6580, 110, 46368, 18050, 0.06, 24850000, 11210, 376500, 40, 19288, 2.4355, 278, 100.5, 370, 1195, 61035], "x": ["Aluminum", "Antimony", "Arsenic", "Cadmium", "Chromium", "Copper", "DDT", "Iron", "Lead", "Manganese", "Mercury", "Nickel", "PAH", "Selenium", "Silver", "Thallium", "Tin", "Zinc"], "type": "bar", "name": "After 2001"}],
        layout: {"yaxis": {"range": [0, 48789473.684210524], "type": "linear", "anchor": "x", "domain": [0, 1], "autorange": true}, "updatemenus": [{"y": 1, "x": -0.15, "active": -1, "buttons": [{"args": [{"visible": [true, false, false]}, {"title": "Bivalves"}], "method": "update", "label": "Bivalves"}, {"args": [{"visible": [false, true, false]}, {"title": "Fish"}], "method": "update", "label": "Fish"}, {"args": [{"visible": [false, false, true]}, {"title": "Sediment"}], "method": "update", "label": "Sediment"}]}], "breakpoints": [], "width": 800, "xaxis": {"range": [-0.5, 19.5], "type": "category", "anchor": "y", "domain": [0, 1], "autorange": true}, "height": 600},
        frames: [],
        config: {"mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A", "linkText": "Export to plot.ly", "showLink": true}
    });
    
}());