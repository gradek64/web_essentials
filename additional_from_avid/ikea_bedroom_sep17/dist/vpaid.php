<?php
    header('Content-Type: application/xml');
?>
<VAST version="2.0">
    <Ad id="spartan_campaign">
        <InLine>
            <AdTitle>Test campaign</AdTitle>
            <AdSystem>Spartan Adserver</AdSystem>
            <Creatives>
                <Creative>
                    <Linear>
                        <Duration>00:00:01</Duration>
                        <AdParameters>
                            <![CDATA[{"contentCard": "<?php preg_match("/\/(.*)\/vpaid.php/", $_SERVER['REQUEST_URI'], $matches); echo $matches[1]; ?>", "disableFrequencyCap": <?php echo isset($_GET['disableFrequencyCap']) ? 1 : 0; ?>}]]>
                        </AdParameters>
                        <MediaFiles>
                            <MediaFile delivery="progressive" width="640" height="360" type="application/javascript" apiFramework="VPAID">
                                <![CDATA[//files.adspdbl.com/vpaid-template/spartan_vpaid.min.js]]>
                            </MediaFile>
                        </MediaFiles>
                    </Linear>
                </Creative>
            </Creatives>
        </InLine>
    </Ad>
</VAST>
