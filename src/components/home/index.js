import React from 'react';
import {serverUrl} from '../../constants';

class Home extends React.Component {

	state = {
        loading: true,
        posts: [],
        topUrlSharer: null,
        mostSharedDomains: []
    };

    logout = () => {
        localStorage.removeItem('oauthAccessToken');
        localStorage.removeItem('oauthAccessTokenSecret');
        window.location.reload();
    };

	componentDidMount() {

        const data = {
            "success":true,
            "posts":[
                {
                    "created_at":"Sat Jul 18 04:12:37 +0000 2020",
                    "id":1284340274022375400,
                    "id_str":"1284340274022375424",
                    "text":"We have lost an American hero. John Lewis guided us toward a more righteous world. He marched in Selma, he marched… https://t.co/m1GLoImTiv",
                    "truncated":true,
                    "entities":{
                        "hashtags":[
        
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
        
                        ],
                        "urls":[
                            {
                                "url":"https://t.co/m1GLoImTiv",
                                "expanded_url":"https://twitter.com/i/web/status/1284340274022375424",
                                "display_url":"twitter.com/i/web/status/1…",
                                "indices":[
                                    116,
                                    139
                                ]
                            }
                        ]
                    },
                    "source":"<a href=\"http://twitter.com/#!/download/ipad\" rel=\"nofollow\">Twitter for iPad</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":1636590253,
                        "id_str":"1636590253",
                        "name":"Tim Cook",
                        "screen_name":"tim_cook",
                        "location":"Cupertino",
                        "description":"Apple CEO  Auburn 🏀 🏈 Duke 🏀 National Parks 🏞️ “Life's most persistent and urgent question is, 'What are you doing for others?'” - MLK",
                        "url":null,
                        "entities":{
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":11982404,
                        "friends_count":68,
                        "listed_count":21194,
                        "created_at":"Wed Jul 31 22:41:25 +0000 2013",
                        "favourites_count":1956,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":true,
                        "verified":true,
                        "statuses_count":1047,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"C0DEED",
                        "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile":false,
                        "profile_image_url":"http://pbs.twimg.com/profile_images/1194113737092935681/63O1znGw_normal.jpg",
                        "profile_image_url_https":"https://pbs.twimg.com/profile_images/1194113737092935681/63O1znGw_normal.jpg",
                        "profile_banner_url":"https://pbs.twimg.com/profile_banners/1636590253/1535753003",
                        "profile_link_color":"0084B4",
                        "profile_sidebar_border_color":"FFFFFF",
                        "profile_sidebar_fill_color":"DDEEF6",
                        "profile_text_color":"333333",
                        "profile_use_background_image":false,
                        "has_extended_profile":false,
                        "default_profile":false,
                        "default_profile_image":false,
                        "following":true,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"none"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "is_quote_status":false,
                    "retweet_count":1432,
                    "favorite_count":10947,
                    "favorited":false,
                    "retweeted":false,
                    "possibly_sensitive":false,
                    "possibly_sensitive_appealable":false,
                    "lang":"en"
                },
                {
                    "created_at":"Fri Jul 17 20:03:11 +0000 2020",
                    "id":1284217100698038300,
                    "id_str":"1284217100698038273",
                    "text":"Wearing a mask helps slow the spread of COVID-19. We all need to do our part. https://t.co/Cv74cUbBYg",
                    "truncated":false,
                    "entities":{
                        "hashtags":[
        
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
        
                        ],
                        "urls":[
        
                        ],
                        "media":[
                            {
                                "id":1284217053185036300,
                                "id_str":"1284217053185036292",
                                "indices":[
                                    78,
                                    101
                                ],
                                "media_url":"http://pbs.twimg.com/tweet_video_thumb/EdJ0mxWX0AQShcH.jpg",
                                "media_url_https":"https://pbs.twimg.com/tweet_video_thumb/EdJ0mxWX0AQShcH.jpg",
                                "url":"https://t.co/Cv74cUbBYg",
                                "display_url":"pic.twitter.com/Cv74cUbBYg",
                                "expanded_url":"https://twitter.com/Google/status/1284217100698038273/photo/1",
                                "type":"photo",
                                "sizes":{
                                    "thumb":{
                                        "w":150,
                                        "h":150,
                                        "resize":"crop"
                                    },
                                    "small":{
                                        "w":680,
                                        "h":680,
                                        "resize":"fit"
                                    },
                                    "large":{
                                        "w":1024,
                                        "h":1024,
                                        "resize":"fit"
                                    },
                                    "medium":{
                                        "w":1024,
                                        "h":1024,
                                        "resize":"fit"
                                    }
                                }
                            }
                        ]
                    },
                    "extended_entities":{
                        "media":[
                            {
                                "id":1284217053185036300,
                                "id_str":"1284217053185036292",
                                "indices":[
                                    78,
                                    101
                                ],
                                "media_url":"http://pbs.twimg.com/tweet_video_thumb/EdJ0mxWX0AQShcH.jpg",
                                "media_url_https":"https://pbs.twimg.com/tweet_video_thumb/EdJ0mxWX0AQShcH.jpg",
                                "url":"https://t.co/Cv74cUbBYg",
                                "display_url":"pic.twitter.com/Cv74cUbBYg",
                                "expanded_url":"https://twitter.com/Google/status/1284217100698038273/photo/1",
                                "type":"animated_gif",
                                "sizes":{
                                    "thumb":{
                                        "w":150,
                                        "h":150,
                                        "resize":"crop"
                                    },
                                    "small":{
                                        "w":680,
                                        "h":680,
                                        "resize":"fit"
                                    },
                                    "large":{
                                        "w":1024,
                                        "h":1024,
                                        "resize":"fit"
                                    },
                                    "medium":{
                                        "w":1024,
                                        "h":1024,
                                        "resize":"fit"
                                    }
                                },
                                "video_info":{
                                    "aspect_ratio":[
                                        1,
                                        1
                                    ],
                                    "variants":[
                                        {
                                            "bitrate":0,
                                            "content_type":"video/mp4",
                                            "url":"https://video.twimg.com/tweet_video/EdJ0mxWX0AQShcH.mp4"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    "source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":20536157,
                        "id_str":"20536157",
                        "name":"Google",
                        "screen_name":"Google",
                        "location":"Mountain View, CA",
                        "description":"#HeyGoogle",
                        "url":"https://t.co/4Rqq6RRNqd",
                        "entities":{
                            "url":{
                                "urls":[
                                    {
                                        "url":"https://t.co/4Rqq6RRNqd",
                                        "expanded_url":"http://google.com/racialequity",
                                        "display_url":"google.com/racialequity",
                                        "indices":[
                                            0,
                                            23
                                        ]
                                    }
                                ]
                            },
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":22126546,
                        "friends_count":289,
                        "listed_count":93079,
                        "created_at":"Tue Feb 10 19:14:39 +0000 2009",
                        "favourites_count":2816,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":true,
                        "verified":true,
                        "statuses_count":114926,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"FFFFFF",
                        "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile":true,
                        "profile_image_url":"http://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_image_url_https":"https://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_banner_url":"https://pbs.twimg.com/profile_banners/20536157/1594740368",
                        "profile_link_color":"0000CC",
                        "profile_sidebar_border_color":"FFFFFF",
                        "profile_sidebar_fill_color":"EBEFF9",
                        "profile_text_color":"000000",
                        "profile_use_background_image":true,
                        "has_extended_profile":false,
                        "default_profile":false,
                        "default_profile_image":false,
                        "following":true,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"regular"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "is_quote_status":false,
                    "retweet_count":720,
                    "favorite_count":2930,
                    "favorited":false,
                    "retweeted":false,
                    "possibly_sensitive":false,
                    "possibly_sensitive_appealable":false,
                    "lang":"en"
                },
                {
                    "created_at":"Fri Jul 17 19:13:37 +0000 2020",
                    "id":1284204626963767300,
                    "id_str":"1284204626963767297",
                    "text":"RT @GoogleATAP: “Google’s secretive ATAP lab is imagining the future of smart devices”: make sure to read this detailed article from @FastC…",
                    "truncated":false,
                    "entities":{
                        "hashtags":[
        
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
                            {
                                "screen_name":"GoogleATAP",
                                "name":"Google ATAP",
                                "id":2924427001,
                                "id_str":"2924427001",
                                "indices":[
                                    3,
                                    14
                                ]
                            }
                        ],
                        "urls":[
        
                        ]
                    },
                    "source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":20536157,
                        "id_str":"20536157",
                        "name":"Google",
                        "screen_name":"Google",
                        "location":"Mountain View, CA",
                        "description":"#HeyGoogle",
                        "url":"https://t.co/4Rqq6RRNqd",
                        "entities":{
                            "url":{
                                "urls":[
                                    {
                                        "url":"https://t.co/4Rqq6RRNqd",
                                        "expanded_url":"http://google.com/racialequity",
                                        "display_url":"google.com/racialequity",
                                        "indices":[
                                            0,
                                            23
                                        ]
                                    }
                                ]
                            },
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":22126546,
                        "friends_count":289,
                        "listed_count":93079,
                        "created_at":"Tue Feb 10 19:14:39 +0000 2009",
                        "favourites_count":2816,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":true,
                        "verified":true,
                        "statuses_count":114926,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"FFFFFF",
                        "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile":true,
                        "profile_image_url":"http://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_image_url_https":"https://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_banner_url":"https://pbs.twimg.com/profile_banners/20536157/1594740368",
                        "profile_link_color":"0000CC",
                        "profile_sidebar_border_color":"FFFFFF",
                        "profile_sidebar_fill_color":"EBEFF9",
                        "profile_text_color":"000000",
                        "profile_use_background_image":true,
                        "has_extended_profile":false,
                        "default_profile":false,
                        "default_profile_image":false,
                        "following":true,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"regular"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "retweeted_status":{
                        "created_at":"Tue Jul 14 16:02:46 +0000 2020",
                        "id":1283069437461971000,
                        "id_str":"1283069437461970945",
                        "text":"“Google’s secretive ATAP lab is imagining the future of smart devices”: make sure to read this detailed article fro… https://t.co/nGeVZJhhU5",
                        "truncated":true,
                        "entities":{
                            "hashtags":[
        
                            ],
                            "symbols":[
        
                            ],
                            "user_mentions":[
        
                            ],
                            "urls":[
                                {
                                    "url":"https://t.co/nGeVZJhhU5",
                                    "expanded_url":"https://twitter.com/i/web/status/1283069437461970945",
                                    "display_url":"twitter.com/i/web/status/1…",
                                    "indices":[
                                        117,
                                        140
                                    ]
                                }
                            ]
                        },
                        "source":"<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                        "in_reply_to_status_id":null,
                        "in_reply_to_status_id_str":null,
                        "in_reply_to_user_id":null,
                        "in_reply_to_user_id_str":null,
                        "in_reply_to_screen_name":null,
                        "user":{
                            "id":2924427001,
                            "id_str":"2924427001",
                            "name":"Google ATAP",
                            "screen_name":"GoogleATAP",
                            "location":"Mountain View, CA",
                            "description":"Google's Advanced Technology & Projects group is a band of believers & makers of the future. #JacquardbyGoogle & #ProjectSoli",
                            "url":"https://t.co/9JQVCOiBFF",
                            "entities":{
                                "url":{
                                    "urls":[
                                        {
                                            "url":"https://t.co/9JQVCOiBFF",
                                            "expanded_url":"https://atap.google.com/soli/sandbox",
                                            "display_url":"atap.google.com/soli/sandbox",
                                            "indices":[
                                                0,
                                                23
                                            ]
                                        }
                                    ]
                                },
                                "description":{
                                    "urls":[
        
                                    ]
                                }
                            },
                            "protected":false,
                            "followers_count":28440,
                            "friends_count":958,
                            "listed_count":343,
                            "created_at":"Tue Dec 09 19:51:52 +0000 2014",
                            "favourites_count":938,
                            "utc_offset":null,
                            "time_zone":null,
                            "geo_enabled":false,
                            "verified":true,
                            "statuses_count":462,
                            "lang":null,
                            "contributors_enabled":false,
                            "is_translator":false,
                            "is_translation_enabled":false,
                            "profile_background_color":"000000",
                            "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                            "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                            "profile_background_tile":false,
                            "profile_image_url":"http://pbs.twimg.com/profile_images/1240756799793319936/geZ4fnhf_normal.jpg",
                            "profile_image_url_https":"https://pbs.twimg.com/profile_images/1240756799793319936/geZ4fnhf_normal.jpg",
                            "profile_banner_url":"https://pbs.twimg.com/profile_banners/2924427001/1583358922",
                            "profile_link_color":"000000",
                            "profile_sidebar_border_color":"000000",
                            "profile_sidebar_fill_color":"000000",
                            "profile_text_color":"000000",
                            "profile_use_background_image":false,
                            "has_extended_profile":false,
                            "default_profile":false,
                            "default_profile_image":false,
                            "following":false,
                            "follow_request_sent":false,
                            "notifications":false,
                            "translator_type":"none"
                        },
                        "geo":null,
                        "coordinates":null,
                        "place":null,
                        "contributors":null,
                        "is_quote_status":false,
                        "retweet_count":35,
                        "favorite_count":222,
                        "favorited":false,
                        "retweeted":false,
                        "possibly_sensitive":false,
                        "possibly_sensitive_appealable":false,
                        "lang":"en"
                    },
                    "is_quote_status":false,
                    "retweet_count":35,
                    "favorite_count":0,
                    "favorited":false,
                    "retweeted":false,
                    "lang":"en"
                },
                {
                    "created_at":"Fri Jul 17 17:34:49 +0000 2020",
                    "id":1284179765319086000,
                    "id_str":"1284179765319086080",
                    "text":"RT @sundarpichai: Is it possible to detect earthquakes with submarine cables? We think it might be.\nhttps://t.co/6oIZTxg1wk",
                    "truncated":false,
                    "entities":{
                        "hashtags":[
        
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
                            {
                                "screen_name":"sundarpichai",
                                "name":"Sundar Pichai",
                                "id":14130366,
                                "id_str":"14130366",
                                "indices":[
                                    3,
                                    16
                                ]
                            }
                        ],
                        "urls":[
                            {
                                "url":"https://t.co/6oIZTxg1wk",
                                "expanded_url":"https://cloud.google.com/blog/products/infrastructure/using-subsea-cables-to-detect-earthquakes",
                                "display_url":"cloud.google.com/blog/products/…",
                                "indices":[
                                    100,
                                    123
                                ]
                            }
                        ]
                    },
                    "source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":20536157,
                        "id_str":"20536157",
                        "name":"Google",
                        "screen_name":"Google",
                        "location":"Mountain View, CA",
                        "description":"#HeyGoogle",
                        "url":"https://t.co/4Rqq6RRNqd",
                        "entities":{
                            "url":{
                                "urls":[
                                    {
                                        "url":"https://t.co/4Rqq6RRNqd",
                                        "expanded_url":"http://google.com/racialequity",
                                        "display_url":"google.com/racialequity",
                                        "indices":[
                                            0,
                                            23
                                        ]
                                    }
                                ]
                            },
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":22126546,
                        "friends_count":289,
                        "listed_count":93079,
                        "created_at":"Tue Feb 10 19:14:39 +0000 2009",
                        "favourites_count":2816,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":true,
                        "verified":true,
                        "statuses_count":114926,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"FFFFFF",
                        "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile":true,
                        "profile_image_url":"http://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_image_url_https":"https://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_banner_url":"https://pbs.twimg.com/profile_banners/20536157/1594740368",
                        "profile_link_color":"0000CC",
                        "profile_sidebar_border_color":"FFFFFF",
                        "profile_sidebar_fill_color":"EBEFF9",
                        "profile_text_color":"000000",
                        "profile_use_background_image":true,
                        "has_extended_profile":false,
                        "default_profile":false,
                        "default_profile_image":false,
                        "following":true,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"regular"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "retweeted_status":{
                        "created_at":"Thu Jul 16 20:13:49 +0000 2020",
                        "id":1283857388752134100,
                        "id_str":"1283857388752134144",
                        "text":"Is it possible to detect earthquakes with submarine cables? We think it might be.\nhttps://t.co/6oIZTxg1wk",
                        "truncated":false,
                        "entities":{
                            "hashtags":[
        
                            ],
                            "symbols":[
        
                            ],
                            "user_mentions":[
        
                            ],
                            "urls":[
                                {
                                    "url":"https://t.co/6oIZTxg1wk",
                                    "expanded_url":"https://cloud.google.com/blog/products/infrastructure/using-subsea-cables-to-detect-earthquakes",
                                    "display_url":"cloud.google.com/blog/products/…",
                                    "indices":[
                                        82,
                                        105
                                    ]
                                }
                            ]
                        },
                        "source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
                        "in_reply_to_status_id":null,
                        "in_reply_to_status_id_str":null,
                        "in_reply_to_user_id":null,
                        "in_reply_to_user_id_str":null,
                        "in_reply_to_screen_name":null,
                        "user":{
                            "id":14130366,
                            "id_str":"14130366",
                            "name":"Sundar Pichai",
                            "screen_name":"sundarpichai",
                            "location":"",
                            "description":"CEO,  Google and Alphabet",
                            "url":null,
                            "entities":{
                                "description":{
                                    "urls":[
        
                                    ]
                                }
                            },
                            "protected":false,
                            "followers_count":3044062,
                            "friends_count":352,
                            "listed_count":6982,
                            "created_at":"Wed Mar 12 05:51:53 +0000 2008",
                            "favourites_count":870,
                            "utc_offset":null,
                            "time_zone":null,
                            "geo_enabled":true,
                            "verified":true,
                            "statuses_count":1430,
                            "lang":null,
                            "contributors_enabled":false,
                            "is_translator":false,
                            "is_translation_enabled":false,
                            "profile_background_color":"1A1B1F",
                            "profile_background_image_url":"http://abs.twimg.com/images/themes/theme9/bg.gif",
                            "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme9/bg.gif",
                            "profile_background_tile":false,
                            "profile_image_url":"http://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_normal.jpg",
                            "profile_image_url_https":"https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_normal.jpg",
                            "profile_link_color":"2FC2EF",
                            "profile_sidebar_border_color":"181A1E",
                            "profile_sidebar_fill_color":"252429",
                            "profile_text_color":"666666",
                            "profile_use_background_image":true,
                            "has_extended_profile":false,
                            "default_profile":false,
                            "default_profile_image":false,
                            "following":false,
                            "follow_request_sent":false,
                            "notifications":false,
                            "translator_type":"none"
                        },
                        "geo":null,
                        "coordinates":null,
                        "place":null,
                        "contributors":null,
                        "is_quote_status":false,
                        "retweet_count":1243,
                        "favorite_count":8358,
                        "favorited":false,
                        "retweeted":false,
                        "possibly_sensitive":false,
                        "possibly_sensitive_appealable":false,
                        "lang":"en"
                    },
                    "is_quote_status":false,
                    "retweet_count":1243,
                    "favorite_count":0,
                    "favorited":false,
                    "retweeted":false,
                    "possibly_sensitive":false,
                    "possibly_sensitive_appealable":false,
                    "lang":"en"
                },
                {
                    "created_at":"Fri Jul 17 16:15:17 +0000 2020",
                    "id":1284159748099711000,
                    "id_str":"1284159748099710981",
                    "text":"Take your texts to the next level with #Fabricius from @GoogleArts. Now you can translate your messages into Egypti… https://t.co/FthDqXcZam",
                    "truncated":true,
                    "entities":{
                        "hashtags":[
                            {
                                "text":"Fabricius",
                                "indices":[
                                    39,
                                    49
                                ]
                            }
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
                            {
                                "screen_name":"googlearts",
                                "name":"Google Arts&Culture",
                                "id":248965136,
                                "id_str":"248965136",
                                "indices":[
                                    55,
                                    66
                                ]
                            }
                        ],
                        "urls":[
                            {
                                "url":"https://t.co/FthDqXcZam",
                                "expanded_url":"https://twitter.com/i/web/status/1284159748099710981",
                                "display_url":"twitter.com/i/web/status/1…",
                                "indices":[
                                    117,
                                    140
                                ]
                            }
                        ]
                    },
                    "source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":20536157,
                        "id_str":"20536157",
                        "name":"Google",
                        "screen_name":"Google",
                        "location":"Mountain View, CA",
                        "description":"#HeyGoogle",
                        "url":"https://t.co/4Rqq6RRNqd",
                        "entities":{
                            "url":{
                                "urls":[
                                    {
                                        "url":"https://t.co/4Rqq6RRNqd",
                                        "expanded_url":"http://google.com/racialequity",
                                        "display_url":"google.com/racialequity",
                                        "indices":[
                                            0,
                                            23
                                        ]
                                    }
                                ]
                            },
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":22126546,
                        "friends_count":289,
                        "listed_count":93079,
                        "created_at":"Tue Feb 10 19:14:39 +0000 2009",
                        "favourites_count":2816,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":true,
                        "verified":true,
                        "statuses_count":114926,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"FFFFFF",
                        "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile":true,
                        "profile_image_url":"http://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_image_url_https":"https://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_banner_url":"https://pbs.twimg.com/profile_banners/20536157/1594740368",
                        "profile_link_color":"0000CC",
                        "profile_sidebar_border_color":"FFFFFF",
                        "profile_sidebar_fill_color":"EBEFF9",
                        "profile_text_color":"000000",
                        "profile_use_background_image":true,
                        "has_extended_profile":false,
                        "default_profile":false,
                        "default_profile_image":false,
                        "following":true,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"regular"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "is_quote_status":false,
                    "retweet_count":87,
                    "favorite_count":454,
                    "favorited":false,
                    "retweeted":false,
                    "possibly_sensitive":false,
                    "possibly_sensitive_appealable":false,
                    "lang":"en"
                },
                {
                    "created_at":"Fri Jul 17 16:14:57 +0000 2020",
                    "id":1284159667082600400,
                    "id_str":"1284159667082600448",
                    "text":"Emoji in your texts, emoji in your contacts, emoji in your folder names. We see you. 🤩\n\nCheck out this video for fi… https://t.co/g5i7ILlf5N",
                    "truncated":true,
                    "entities":{
                        "hashtags":[
        
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
        
                        ],
                        "urls":[
                            {
                                "url":"https://t.co/g5i7ILlf5N",
                                "expanded_url":"https://twitter.com/i/web/status/1284159667082600448",
                                "display_url":"twitter.com/i/web/status/1…",
                                "indices":[
                                    117,
                                    140
                                ]
                            }
                        ]
                    },
                    "source":"<a href=\"https://www.sprinklr.com\" rel=\"nofollow\">Sprinklr</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":3309375033,
                        "id_str":"3309375033",
                        "name":"Apple Support",
                        "screen_name":"AppleSupport",
                        "location":"Cupertino, CA",
                        "description":"We’re here to provide tips, tricks and helpful information when you need it most. We’re available every day to answer your questions, from 5am-8pm Pacific.",
                        "url":"https://t.co/zFeqTSVTef",
                        "entities":{
                            "url":{
                                "urls":[
                                    {
                                        "url":"https://t.co/zFeqTSVTef",
                                        "expanded_url":"http://support.apple.com",
                                        "display_url":"support.apple.com",
                                        "indices":[
                                            0,
                                            23
                                        ]
                                    }
                                ]
                            },
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":1170152,
                        "friends_count":28,
                        "listed_count":5006,
                        "created_at":"Fri Jun 05 16:05:20 +0000 2015",
                        "favourites_count":1,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":false,
                        "verified":true,
                        "statuses_count":1246604,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"000000",
                        "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile":false,
                        "profile_image_url":"http://pbs.twimg.com/profile_images/1174747027986452480/cSlw47L-_normal.png",
                        "profile_image_url_https":"https://pbs.twimg.com/profile_images/1174747027986452480/cSlw47L-_normal.png",
                        "profile_banner_url":"https://pbs.twimg.com/profile_banners/3309375033/1594222934",
                        "profile_link_color":"0070C9",
                        "profile_sidebar_border_color":"000000",
                        "profile_sidebar_fill_color":"000000",
                        "profile_text_color":"000000",
                        "profile_use_background_image":false,
                        "has_extended_profile":false,
                        "default_profile":false,
                        "default_profile_image":false,
                        "following":true,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"none"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "is_quote_status":false,
                    "retweet_count":99,
                    "favorite_count":461,
                    "favorited":false,
                    "retweeted":false,
                    "possibly_sensitive":false,
                    "possibly_sensitive_appealable":false,
                    "lang":"en"
                },
                {
                    "created_at":"Fri Jul 17 15:08:11 +0000 2020",
                    "id":1284142861978656800,
                    "id_str":"1284142861978656768",
                    "text":"Happy World Emoji Day! We’ve (polar) bear-ly been able to contain ourselves, but we can finally spill the (boba) te… https://t.co/RNSqVzOoC7",
                    "truncated":true,
                    "entities":{
                        "hashtags":[
        
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
        
                        ],
                        "urls":[
                            {
                                "url":"https://t.co/RNSqVzOoC7",
                                "expanded_url":"https://twitter.com/i/web/status/1284142861978656768",
                                "display_url":"twitter.com/i/web/status/1…",
                                "indices":[
                                    117,
                                    140
                                ]
                            }
                        ]
                    },
                    "source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":20536157,
                        "id_str":"20536157",
                        "name":"Google",
                        "screen_name":"Google",
                        "location":"Mountain View, CA",
                        "description":"#HeyGoogle",
                        "url":"https://t.co/4Rqq6RRNqd",
                        "entities":{
                            "url":{
                                "urls":[
                                    {
                                        "url":"https://t.co/4Rqq6RRNqd",
                                        "expanded_url":"http://google.com/racialequity",
                                        "display_url":"google.com/racialequity",
                                        "indices":[
                                            0,
                                            23
                                        ]
                                    }
                                ]
                            },
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":22126546,
                        "friends_count":289,
                        "listed_count":93079,
                        "created_at":"Tue Feb 10 19:14:39 +0000 2009",
                        "favourites_count":2816,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":true,
                        "verified":true,
                        "statuses_count":114926,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"FFFFFF",
                        "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile":true,
                        "profile_image_url":"http://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_image_url_https":"https://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_banner_url":"https://pbs.twimg.com/profile_banners/20536157/1594740368",
                        "profile_link_color":"0000CC",
                        "profile_sidebar_border_color":"FFFFFF",
                        "profile_sidebar_fill_color":"EBEFF9",
                        "profile_text_color":"000000",
                        "profile_use_background_image":true,
                        "has_extended_profile":false,
                        "default_profile":false,
                        "default_profile_image":false,
                        "following":true,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"regular"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "is_quote_status":false,
                    "retweet_count":122,
                    "favorite_count":716,
                    "favorited":false,
                    "retweeted":false,
                    "possibly_sensitive":false,
                    "possibly_sensitive_appealable":false,
                    "lang":"en"
                },
                {
                    "created_at":"Fri Jul 17 14:16:07 +0000 2020",
                    "id":1284129762068308000,
                    "id_str":"1284129762068307969",
                    "text":"💃🕺🥳🙌🤩🎉\n\nHappy #WorldEmojiDay from 🍎. https://t.co/LA3QqyRLmj",
                    "truncated":false,
                    "entities":{
                        "hashtags":[
                            {
                                "text":"WorldEmojiDay",
                                "indices":[
                                    14,
                                    28
                                ]
                            }
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
        
                        ],
                        "urls":[
        
                        ],
                        "media":[
                            {
                                "id":1284129690932969500,
                                "id_str":"1284129690932969474",
                                "indices":[
                                    37,
                                    60
                                ],
                                "media_url":"http://pbs.twimg.com/media/EdIlNf9XsAAnT2a.jpg",
                                "media_url_https":"https://pbs.twimg.com/media/EdIlNf9XsAAnT2a.jpg",
                                "url":"https://t.co/LA3QqyRLmj",
                                "display_url":"pic.twitter.com/LA3QqyRLmj",
                                "expanded_url":"https://twitter.com/AppleSupport/status/1284129762068307969/video/1",
                                "type":"photo",
                                "sizes":{
                                    "thumb":{
                                        "w":150,
                                        "h":150,
                                        "resize":"crop"
                                    },
                                    "small":{
                                        "w":680,
                                        "h":680,
                                        "resize":"fit"
                                    },
                                    "medium":{
                                        "w":720,
                                        "h":720,
                                        "resize":"fit"
                                    },
                                    "large":{
                                        "w":720,
                                        "h":720,
                                        "resize":"fit"
                                    }
                                }
                            }
                        ]
                    },
                    "extended_entities":{
                        "media":[
                            {
                                "id":1284129690932969500,
                                "id_str":"1284129690932969474",
                                "indices":[
                                    37,
                                    60
                                ],
                                "media_url":"http://pbs.twimg.com/media/EdIlNf9XsAAnT2a.jpg",
                                "media_url_https":"https://pbs.twimg.com/media/EdIlNf9XsAAnT2a.jpg",
                                "url":"https://t.co/LA3QqyRLmj",
                                "display_url":"pic.twitter.com/LA3QqyRLmj",
                                "expanded_url":"https://twitter.com/AppleSupport/status/1284129762068307969/video/1",
                                "type":"video",
                                "sizes":{
                                    "thumb":{
                                        "w":150,
                                        "h":150,
                                        "resize":"crop"
                                    },
                                    "small":{
                                        "w":680,
                                        "h":680,
                                        "resize":"fit"
                                    },
                                    "medium":{
                                        "w":720,
                                        "h":720,
                                        "resize":"fit"
                                    },
                                    "large":{
                                        "w":720,
                                        "h":720,
                                        "resize":"fit"
                                    }
                                },
                                "video_info":{
                                    "aspect_ratio":[
                                        1,
                                        1
                                    ],
                                    "duration_millis":12833,
                                    "variants":[
                                        {
                                            "content_type":"application/x-mpegURL",
                                            "url":"https://video.twimg.com/amplify_video/1284129690932969474/pl/WpDU8ivePuWcVET1.m3u8?tag=13"
                                        },
                                        {
                                            "bitrate":1280000,
                                            "content_type":"video/mp4",
                                            "url":"https://video.twimg.com/amplify_video/1284129690932969474/vid/720x720/IdKoG1kT1B0uVKOK.mp4?tag=13"
                                        },
                                        {
                                            "bitrate":832000,
                                            "content_type":"video/mp4",
                                            "url":"https://video.twimg.com/amplify_video/1284129690932969474/vid/480x480/q47qR0lLAVagO5fg.mp4?tag=13"
                                        },
                                        {
                                            "bitrate":432000,
                                            "content_type":"video/mp4",
                                            "url":"https://video.twimg.com/amplify_video/1284129690932969474/vid/320x320/DRocd5dFVMN9Ed_8.mp4?tag=13"
                                        }
                                    ]
                                },
                                "additional_media_info":{
                                    "title":"",
                                    "description":"",
                                    "monetizable":false
                                }
                            }
                        ]
                    },
                    "source":"<a href=\"https://www.sprinklr.com\" rel=\"nofollow\">Sprinklr</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":3309375033,
                        "id_str":"3309375033",
                        "name":"Apple Support",
                        "screen_name":"AppleSupport",
                        "location":"Cupertino, CA",
                        "description":"We’re here to provide tips, tricks and helpful information when you need it most. We’re available every day to answer your questions, from 5am-8pm Pacific.",
                        "url":"https://t.co/zFeqTSVTef",
                        "entities":{
                            "url":{
                                "urls":[
                                    {
                                        "url":"https://t.co/zFeqTSVTef",
                                        "expanded_url":"http://support.apple.com",
                                        "display_url":"support.apple.com",
                                        "indices":[
                                            0,
                                            23
                                        ]
                                    }
                                ]
                            },
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":1170152,
                        "friends_count":28,
                        "listed_count":5006,
                        "created_at":"Fri Jun 05 16:05:20 +0000 2015",
                        "favourites_count":1,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":false,
                        "verified":true,
                        "statuses_count":1246604,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"000000",
                        "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile":false,
                        "profile_image_url":"http://pbs.twimg.com/profile_images/1174747027986452480/cSlw47L-_normal.png",
                        "profile_image_url_https":"https://pbs.twimg.com/profile_images/1174747027986452480/cSlw47L-_normal.png",
                        "profile_banner_url":"https://pbs.twimg.com/profile_banners/3309375033/1594222934",
                        "profile_link_color":"0070C9",
                        "profile_sidebar_border_color":"000000",
                        "profile_sidebar_fill_color":"000000",
                        "profile_text_color":"000000",
                        "profile_use_background_image":false,
                        "has_extended_profile":false,
                        "default_profile":false,
                        "default_profile_image":false,
                        "following":true,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"none"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "is_quote_status":false,
                    "retweet_count":445,
                    "favorite_count":2222,
                    "favorited":false,
                    "retweeted":false,
                    "possibly_sensitive":false,
                    "possibly_sensitive_appealable":false,
                    "lang":"en"
                },
                {
                    "created_at":"Fri Jul 17 12:50:26 +0000 2020",
                    "id":1284108197297438700,
                    "id_str":"1284108197297438720",
                    "text":"With new headwear options and masks in iOS 14 — we’ve got you covered! Happy #WorldEmojiDay! https://t.co/AqQp0QVefV",
                    "truncated":false,
                    "entities":{
                        "hashtags":[
                            {
                                "text":"WorldEmojiDay",
                                "indices":[
                                    77,
                                    91
                                ]
                            }
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
        
                        ],
                        "urls":[
        
                        ],
                        "media":[
                            {
                                "id":1284108149775929300,
                                "id_str":"1284108149775929344",
                                "indices":[
                                    93,
                                    116
                                ],
                                "media_url":"http://pbs.twimg.com/ext_tw_video_thumb/1284108149775929344/pu/img/ZMbaPmqWt4IHyVhp.jpg",
                                "media_url_https":"https://pbs.twimg.com/ext_tw_video_thumb/1284108149775929344/pu/img/ZMbaPmqWt4IHyVhp.jpg",
                                "url":"https://t.co/AqQp0QVefV",
                                "display_url":"pic.twitter.com/AqQp0QVefV",
                                "expanded_url":"https://twitter.com/tim_cook/status/1284108197297438720/video/1",
                                "type":"photo",
                                "sizes":{
                                    "thumb":{
                                        "w":150,
                                        "h":150,
                                        "resize":"crop"
                                    },
                                    "small":{
                                        "w":680,
                                        "h":680,
                                        "resize":"fit"
                                    },
                                    "medium":{
                                        "w":720,
                                        "h":720,
                                        "resize":"fit"
                                    },
                                    "large":{
                                        "w":720,
                                        "h":720,
                                        "resize":"fit"
                                    }
                                }
                            }
                        ]
                    },
                    "extended_entities":{
                        "media":[
                            {
                                "id":1284108149775929300,
                                "id_str":"1284108149775929344",
                                "indices":[
                                    93,
                                    116
                                ],
                                "media_url":"http://pbs.twimg.com/ext_tw_video_thumb/1284108149775929344/pu/img/ZMbaPmqWt4IHyVhp.jpg",
                                "media_url_https":"https://pbs.twimg.com/ext_tw_video_thumb/1284108149775929344/pu/img/ZMbaPmqWt4IHyVhp.jpg",
                                "url":"https://t.co/AqQp0QVefV",
                                "display_url":"pic.twitter.com/AqQp0QVefV",
                                "expanded_url":"https://twitter.com/tim_cook/status/1284108197297438720/video/1",
                                "type":"video",
                                "sizes":{
                                    "thumb":{
                                        "w":150,
                                        "h":150,
                                        "resize":"crop"
                                    },
                                    "small":{
                                        "w":680,
                                        "h":680,
                                        "resize":"fit"
                                    },
                                    "medium":{
                                        "w":720,
                                        "h":720,
                                        "resize":"fit"
                                    },
                                    "large":{
                                        "w":720,
                                        "h":720,
                                        "resize":"fit"
                                    }
                                },
                                "video_info":{
                                    "aspect_ratio":[
                                        1,
                                        1
                                    ],
                                    "duration_millis":12633,
                                    "variants":[
                                        {
                                            "bitrate":432000,
                                            "content_type":"video/mp4",
                                            "url":"https://video.twimg.com/ext_tw_video/1284108149775929344/pu/vid/320x320/Xx6QmkHaWl-6i-e4.mp4?tag=10"
                                        },
                                        {
                                            "content_type":"application/x-mpegURL",
                                            "url":"https://video.twimg.com/ext_tw_video/1284108149775929344/pu/pl/lLNJTo1vB9kRDOr-.m3u8?tag=10"
                                        },
                                        {
                                            "bitrate":832000,
                                            "content_type":"video/mp4",
                                            "url":"https://video.twimg.com/ext_tw_video/1284108149775929344/pu/vid/480x480/fVQ9d0xj4sRxryrD.mp4?tag=10"
                                        },
                                        {
                                            "bitrate":1280000,
                                            "content_type":"video/mp4",
                                            "url":"https://video.twimg.com/ext_tw_video/1284108149775929344/pu/vid/720x720/W2DoOUB4RaPk9yJt.mp4?tag=10"
                                        }
                                    ]
                                },
                                "additional_media_info":{
                                    "monetizable":false
                                }
                            }
                        ]
                    },
                    "source":"<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":1636590253,
                        "id_str":"1636590253",
                        "name":"Tim Cook",
                        "screen_name":"tim_cook",
                        "location":"Cupertino",
                        "description":"Apple CEO  Auburn 🏀 🏈 Duke 🏀 National Parks 🏞️ “Life's most persistent and urgent question is, 'What are you doing for others?'” - MLK",
                        "url":null,
                        "entities":{
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":11982404,
                        "friends_count":68,
                        "listed_count":21194,
                        "created_at":"Wed Jul 31 22:41:25 +0000 2013",
                        "favourites_count":1956,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":true,
                        "verified":true,
                        "statuses_count":1047,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"C0DEED",
                        "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile":false,
                        "profile_image_url":"http://pbs.twimg.com/profile_images/1194113737092935681/63O1znGw_normal.jpg",
                        "profile_image_url_https":"https://pbs.twimg.com/profile_images/1194113737092935681/63O1znGw_normal.jpg",
                        "profile_banner_url":"https://pbs.twimg.com/profile_banners/1636590253/1535753003",
                        "profile_link_color":"0084B4",
                        "profile_sidebar_border_color":"FFFFFF",
                        "profile_sidebar_fill_color":"DDEEF6",
                        "profile_text_color":"333333",
                        "profile_use_background_image":false,
                        "has_extended_profile":false,
                        "default_profile":false,
                        "default_profile_image":false,
                        "following":true,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"none"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "is_quote_status":false,
                    "retweet_count":1627,
                    "favorite_count":12622,
                    "favorited":false,
                    "retweeted":false,
                    "possibly_sensitive":false,
                    "possibly_sensitive_appealable":false,
                    "lang":"en"
                },
                {
                    "created_at":"Thu Jul 16 23:29:55 +0000 2020",
                    "id":1283906740145336300,
                    "id_str":"1283906740145336321",
                    "text":"There’s 🦸‍♀️ something 🕵️‍♂️ fun 🏒 for 🧙‍♀️ everyone 🤿.\n\nHere’s how to find your next favorite game in Apple Arcade. https://t.co/c3h6gphGFh",
                    "truncated":false,
                    "entities":{
                        "hashtags":[
        
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
        
                        ],
                        "urls":[
        
                        ],
                        "media":[
                            {
                                "id":1283906662240223200,
                                "id_str":"1283906662240223232",
                                "indices":[
                                    117,
                                    140
                                ],
                                "media_url":"http://pbs.twimg.com/media/EdFaXnsXsAAVW4B.png",
                                "media_url_https":"https://pbs.twimg.com/media/EdFaXnsXsAAVW4B.png",
                                "url":"https://t.co/c3h6gphGFh",
                                "display_url":"pic.twitter.com/c3h6gphGFh",
                                "expanded_url":"https://twitter.com/AppleSupport/status/1283906740145336321/video/1",
                                "type":"photo",
                                "sizes":{
                                    "medium":{
                                        "w":1200,
                                        "h":1200,
                                        "resize":"fit"
                                    },
                                    "large":{
                                        "w":2048,
                                        "h":2048,
                                        "resize":"fit"
                                    },
                                    "small":{
                                        "w":680,
                                        "h":680,
                                        "resize":"fit"
                                    },
                                    "thumb":{
                                        "w":150,
                                        "h":150,
                                        "resize":"crop"
                                    }
                                }
                            }
                        ]
                    },
                    "extended_entities":{
                        "media":[
                            {
                                "id":1283906662240223200,
                                "id_str":"1283906662240223232",
                                "indices":[
                                    117,
                                    140
                                ],
                                "media_url":"http://pbs.twimg.com/media/EdFaXnsXsAAVW4B.png",
                                "media_url_https":"https://pbs.twimg.com/media/EdFaXnsXsAAVW4B.png",
                                "url":"https://t.co/c3h6gphGFh",
                                "display_url":"pic.twitter.com/c3h6gphGFh",
                                "expanded_url":"https://twitter.com/AppleSupport/status/1283906740145336321/video/1",
                                "type":"video",
                                "sizes":{
                                    "medium":{
                                        "w":1200,
                                        "h":1200,
                                        "resize":"fit"
                                    },
                                    "large":{
                                        "w":2048,
                                        "h":2048,
                                        "resize":"fit"
                                    },
                                    "small":{
                                        "w":680,
                                        "h":680,
                                        "resize":"fit"
                                    },
                                    "thumb":{
                                        "w":150,
                                        "h":150,
                                        "resize":"crop"
                                    }
                                },
                                "video_info":{
                                    "aspect_ratio":[
                                        1,
                                        1
                                    ],
                                    "duration_millis":36603,
                                    "variants":[
                                        {
                                            "bitrate":832000,
                                            "content_type":"video/mp4",
                                            "url":"https://video.twimg.com/amplify_video/1283906662240223232/vid/480x480/lXhU92x7-mQyZj9l.mp4?tag=13"
                                        },
                                        {
                                            "content_type":"application/x-mpegURL",
                                            "url":"https://video.twimg.com/amplify_video/1283906662240223232/pl/nYEgDKA_BOTx1J4C.m3u8?tag=13"
                                        },
                                        {
                                            "bitrate":1280000,
                                            "content_type":"video/mp4",
                                            "url":"https://video.twimg.com/amplify_video/1283906662240223232/vid/720x720/X4tgRPIyE2egNAm8.mp4?tag=13"
                                        },
                                        {
                                            "bitrate":432000,
                                            "content_type":"video/mp4",
                                            "url":"https://video.twimg.com/amplify_video/1283906662240223232/vid/320x320/vmoXLAB8PJrR4ASk.mp4?tag=13"
                                        }
                                    ]
                                },
                                "additional_media_info":{
                                    "title":"",
                                    "description":"",
                                    "monetizable":false
                                }
                            }
                        ]
                    },
                    "source":"<a href=\"https://www.sprinklr.com\" rel=\"nofollow\">Sprinklr</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":3309375033,
                        "id_str":"3309375033",
                        "name":"Apple Support",
                        "screen_name":"AppleSupport",
                        "location":"Cupertino, CA",
                        "description":"We’re here to provide tips, tricks and helpful information when you need it most. We’re available every day to answer your questions, from 5am-8pm Pacific.",
                        "url":"https://t.co/zFeqTSVTef",
                        "entities":{
                            "url":{
                                "urls":[
                                    {
                                        "url":"https://t.co/zFeqTSVTef",
                                        "expanded_url":"http://support.apple.com",
                                        "display_url":"support.apple.com",
                                        "indices":[
                                            0,
                                            23
                                        ]
                                    }
                                ]
                            },
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":1170152,
                        "friends_count":28,
                        "listed_count":5006,
                        "created_at":"Fri Jun 05 16:05:20 +0000 2015",
                        "favourites_count":1,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":false,
                        "verified":true,
                        "statuses_count":1246604,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"000000",
                        "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile":false,
                        "profile_image_url":"http://pbs.twimg.com/profile_images/1174747027986452480/cSlw47L-_normal.png",
                        "profile_image_url_https":"https://pbs.twimg.com/profile_images/1174747027986452480/cSlw47L-_normal.png",
                        "profile_banner_url":"https://pbs.twimg.com/profile_banners/3309375033/1594222934",
                        "profile_link_color":"0070C9",
                        "profile_sidebar_border_color":"000000",
                        "profile_sidebar_fill_color":"000000",
                        "profile_text_color":"000000",
                        "profile_use_background_image":false,
                        "has_extended_profile":false,
                        "default_profile":false,
                        "default_profile_image":false,
                        "following":true,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"none"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "is_quote_status":false,
                    "retweet_count":36,
                    "favorite_count":286,
                    "favorited":false,
                    "retweeted":false,
                    "possibly_sensitive":false,
                    "possibly_sensitive_appealable":false,
                    "lang":"en"
                },
                {
                    "created_at":"Thu Jul 16 21:40:33 +0000 2020",
                    "id":1283879218447818800,
                    "id_str":"1283879218447818752",
                    "text":"In 2020, people in the U.S. are searching for “compton cowboys” more than ever before. The South Central Los Angele… https://t.co/CRavHd5Iva",
                    "truncated":true,
                    "entities":{
                        "hashtags":[
        
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
        
                        ],
                        "urls":[
                            {
                                "url":"https://t.co/CRavHd5Iva",
                                "expanded_url":"https://twitter.com/i/web/status/1283879218447818752",
                                "display_url":"twitter.com/i/web/status/1…",
                                "indices":[
                                    117,
                                    140
                                ]
                            }
                        ]
                    },
                    "source":"<a href=\"https://studio.twitter.com\" rel=\"nofollow\">Twitter Media Studio</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":20536157,
                        "id_str":"20536157",
                        "name":"Google",
                        "screen_name":"Google",
                        "location":"Mountain View, CA",
                        "description":"#HeyGoogle",
                        "url":"https://t.co/4Rqq6RRNqd",
                        "entities":{
                            "url":{
                                "urls":[
                                    {
                                        "url":"https://t.co/4Rqq6RRNqd",
                                        "expanded_url":"http://google.com/racialequity",
                                        "display_url":"google.com/racialequity",
                                        "indices":[
                                            0,
                                            23
                                        ]
                                    }
                                ]
                            },
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":22126546,
                        "friends_count":289,
                        "listed_count":93079,
                        "created_at":"Tue Feb 10 19:14:39 +0000 2009",
                        "favourites_count":2816,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":true,
                        "verified":true,
                        "statuses_count":114926,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"FFFFFF",
                        "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile":true,
                        "profile_image_url":"http://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_image_url_https":"https://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_banner_url":"https://pbs.twimg.com/profile_banners/20536157/1594740368",
                        "profile_link_color":"0000CC",
                        "profile_sidebar_border_color":"FFFFFF",
                        "profile_sidebar_fill_color":"EBEFF9",
                        "profile_text_color":"000000",
                        "profile_use_background_image":true,
                        "has_extended_profile":false,
                        "default_profile":false,
                        "default_profile_image":false,
                        "following":true,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"regular"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "is_quote_status":false,
                    "retweet_count":61,
                    "favorite_count":460,
                    "favorited":false,
                    "retweeted":false,
                    "possibly_sensitive":false,
                    "possibly_sensitive_appealable":false,
                    "lang":"en"
                },
                {
                    "created_at":"Thu Jul 16 20:19:57 +0000 2020",
                    "id":1283858932985929700,
                    "id_str":"1283858932985929744",
                    "text":"RT @googlecloud: From industry insights content to digital learning opportunities, #GoogleCloudNext ‘20: OnAir is offering fresh content, o…",
                    "truncated":false,
                    "entities":{
                        "hashtags":[
                            {
                                "text":"GoogleCloudNext",
                                "indices":[
                                    83,
                                    99
                                ]
                            }
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
                            {
                                "screen_name":"googlecloud",
                                "name":"Google Cloud",
                                "id":19367815,
                                "id_str":"19367815",
                                "indices":[
                                    3,
                                    15
                                ]
                            }
                        ],
                        "urls":[
        
                        ]
                    },
                    "source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":20536157,
                        "id_str":"20536157",
                        "name":"Google",
                        "screen_name":"Google",
                        "location":"Mountain View, CA",
                        "description":"#HeyGoogle",
                        "url":"https://t.co/4Rqq6RRNqd",
                        "entities":{
                            "url":{
                                "urls":[
                                    {
                                        "url":"https://t.co/4Rqq6RRNqd",
                                        "expanded_url":"http://google.com/racialequity",
                                        "display_url":"google.com/racialequity",
                                        "indices":[
                                            0,
                                            23
                                        ]
                                    }
                                ]
                            },
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":22126546,
                        "friends_count":289,
                        "listed_count":93079,
                        "created_at":"Tue Feb 10 19:14:39 +0000 2009",
                        "favourites_count":2816,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":true,
                        "verified":true,
                        "statuses_count":114926,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"FFFFFF",
                        "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile":true,
                        "profile_image_url":"http://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_image_url_https":"https://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_banner_url":"https://pbs.twimg.com/profile_banners/20536157/1594740368",
                        "profile_link_color":"0000CC",
                        "profile_sidebar_border_color":"FFFFFF",
                        "profile_sidebar_fill_color":"EBEFF9",
                        "profile_text_color":"000000",
                        "profile_use_background_image":true,
                        "has_extended_profile":false,
                        "default_profile":false,
                        "default_profile_image":false,
                        "following":true,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"regular"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "retweeted_status":{
                        "created_at":"Thu Jul 16 13:08:11 +0000 2020",
                        "id":1283750275749216300,
                        "id_str":"1283750275749216257",
                        "text":"From industry insights content to digital learning opportunities, #GoogleCloudNext ‘20: OnAir is offering fresh con… https://t.co/OEZVOlpUGW",
                        "truncated":true,
                        "entities":{
                            "hashtags":[
                                {
                                    "text":"GoogleCloudNext",
                                    "indices":[
                                        66,
                                        82
                                    ]
                                }
                            ],
                            "symbols":[
        
                            ],
                            "user_mentions":[
        
                            ],
                            "urls":[
                                {
                                    "url":"https://t.co/OEZVOlpUGW",
                                    "expanded_url":"https://twitter.com/i/web/status/1283750275749216257",
                                    "display_url":"twitter.com/i/web/status/1…",
                                    "indices":[
                                        117,
                                        140
                                    ]
                                }
                            ]
                        },
                        "source":"<a href=\"https://www.sprinklr.com\" rel=\"nofollow\">Sprinklr</a>",
                        "in_reply_to_status_id":null,
                        "in_reply_to_status_id_str":null,
                        "in_reply_to_user_id":null,
                        "in_reply_to_user_id_str":null,
                        "in_reply_to_screen_name":null,
                        "user":{
                            "id":19367815,
                            "id_str":"19367815",
                            "name":"Google Cloud",
                            "screen_name":"googlecloud",
                            "location":"",
                            "description":"Computing power delivered everywhere, for customers & @gcloudpartners alike. Here's how to transform your biz with @GCPcloud, @gsuite, #Chrome & Android devices",
                            "url":"https://t.co/evo0VhG19p",
                            "entities":{
                                "url":{
                                    "urls":[
                                        {
                                            "url":"https://t.co/evo0VhG19p",
                                            "expanded_url":"http://google.com/cloud",
                                            "display_url":"google.com/cloud",
                                            "indices":[
                                                0,
                                                23
                                            ]
                                        }
                                    ]
                                },
                                "description":{
                                    "urls":[
        
                                    ]
                                }
                            },
                            "protected":false,
                            "followers_count":267705,
                            "friends_count":792,
                            "listed_count":6088,
                            "created_at":"Thu Jan 22 23:01:56 +0000 2009",
                            "favourites_count":2409,
                            "utc_offset":null,
                            "time_zone":null,
                            "geo_enabled":false,
                            "verified":true,
                            "statuses_count":6639,
                            "lang":null,
                            "contributors_enabled":false,
                            "is_translator":false,
                            "is_translation_enabled":false,
                            "profile_background_color":"FFFFFF",
                            "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                            "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                            "profile_background_tile":false,
                            "profile_image_url":"http://pbs.twimg.com/profile_images/1190319303041724417/1a61e4pu_normal.jpg",
                            "profile_image_url_https":"https://pbs.twimg.com/profile_images/1190319303041724417/1a61e4pu_normal.jpg",
                            "profile_banner_url":"https://pbs.twimg.com/profile_banners/19367815/1594053905",
                            "profile_link_color":"1B95E0",
                            "profile_sidebar_border_color":"FFFFFF",
                            "profile_sidebar_fill_color":"FFFFFF",
                            "profile_text_color":"333333",
                            "profile_use_background_image":false,
                            "has_extended_profile":false,
                            "default_profile":false,
                            "default_profile_image":false,
                            "following":false,
                            "follow_request_sent":false,
                            "notifications":false,
                            "translator_type":"none"
                        },
                        "geo":null,
                        "coordinates":null,
                        "place":null,
                        "contributors":null,
                        "is_quote_status":false,
                        "retweet_count":35,
                        "favorite_count":230,
                        "favorited":false,
                        "retweeted":false,
                        "possibly_sensitive":false,
                        "possibly_sensitive_appealable":false,
                        "lang":"en"
                    },
                    "is_quote_status":false,
                    "retweet_count":35,
                    "favorite_count":0,
                    "favorited":false,
                    "retweeted":false,
                    "lang":"en"
                },
                {
                    "created_at":"Thu Jul 16 19:52:52 +0000 2020",
                    "id":1283852120119107600,
                    "id_str":"1283852120119107584",
                    "text":"At Apple, we believe in the power of education to transform lives and we're committed to partnering with communitie… https://t.co/xrZoEyPGte",
                    "truncated":true,
                    "entities":{
                        "hashtags":[
        
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
        
                        ],
                        "urls":[
                            {
                                "url":"https://t.co/xrZoEyPGte",
                                "expanded_url":"https://twitter.com/i/web/status/1283852120119107584",
                                "display_url":"twitter.com/i/web/status/1…",
                                "indices":[
                                    117,
                                    140
                                ]
                            }
                        ]
                    },
                    "source":"<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":1636590253,
                        "id_str":"1636590253",
                        "name":"Tim Cook",
                        "screen_name":"tim_cook",
                        "location":"Cupertino",
                        "description":"Apple CEO  Auburn 🏀 🏈 Duke 🏀 National Parks 🏞️ “Life's most persistent and urgent question is, 'What are you doing for others?'” - MLK",
                        "url":null,
                        "entities":{
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":11982404,
                        "friends_count":68,
                        "listed_count":21194,
                        "created_at":"Wed Jul 31 22:41:25 +0000 2013",
                        "favourites_count":1956,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":true,
                        "verified":true,
                        "statuses_count":1047,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"C0DEED",
                        "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile":false,
                        "profile_image_url":"http://pbs.twimg.com/profile_images/1194113737092935681/63O1znGw_normal.jpg",
                        "profile_image_url_https":"https://pbs.twimg.com/profile_images/1194113737092935681/63O1znGw_normal.jpg",
                        "profile_banner_url":"https://pbs.twimg.com/profile_banners/1636590253/1535753003",
                        "profile_link_color":"0084B4",
                        "profile_sidebar_border_color":"FFFFFF",
                        "profile_sidebar_fill_color":"DDEEF6",
                        "profile_text_color":"333333",
                        "profile_use_background_image":false,
                        "has_extended_profile":false,
                        "default_profile":false,
                        "default_profile_image":false,
                        "following":true,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"none"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "is_quote_status":false,
                    "retweet_count":442,
                    "favorite_count":3361,
                    "favorited":false,
                    "retweeted":false,
                    "possibly_sensitive":false,
                    "possibly_sensitive_appealable":false,
                    "lang":"en"
                },
                {
                    "created_at":"Thu Jul 16 19:22:20 +0000 2020",
                    "id":1283844433423806500,
                    "id_str":"1283844433423806464",
                    "text":"RT @Googleorg: We’re supporting @MSMEDU with a $1M grant and a #GoogleorgFellowship, which began with a design sprint on health equity yest…",
                    "truncated":false,
                    "entities":{
                        "hashtags":[
                            {
                                "text":"GoogleorgFellowship",
                                "indices":[
                                    63,
                                    83
                                ]
                            }
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
                            {
                                "screen_name":"Googleorg",
                                "name":"Google.org",
                                "id":2499289070,
                                "id_str":"2499289070",
                                "indices":[
                                    3,
                                    13
                                ]
                            },
                            {
                                "screen_name":"MSMEDU",
                                "name":"MSM",
                                "id":67006855,
                                "id_str":"67006855",
                                "indices":[
                                    32,
                                    39
                                ]
                            }
                        ],
                        "urls":[
        
                        ]
                    },
                    "source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":20536157,
                        "id_str":"20536157",
                        "name":"Google",
                        "screen_name":"Google",
                        "location":"Mountain View, CA",
                        "description":"#HeyGoogle",
                        "url":"https://t.co/4Rqq6RRNqd",
                        "entities":{
                            "url":{
                                "urls":[
                                    {
                                        "url":"https://t.co/4Rqq6RRNqd",
                                        "expanded_url":"http://google.com/racialequity",
                                        "display_url":"google.com/racialequity",
                                        "indices":[
                                            0,
                                            23
                                        ]
                                    }
                                ]
                            },
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":22126546,
                        "friends_count":289,
                        "listed_count":93079,
                        "created_at":"Tue Feb 10 19:14:39 +0000 2009",
                        "favourites_count":2816,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":true,
                        "verified":true,
                        "statuses_count":114926,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"FFFFFF",
                        "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile":true,
                        "profile_image_url":"http://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_image_url_https":"https://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_banner_url":"https://pbs.twimg.com/profile_banners/20536157/1594740368",
                        "profile_link_color":"0000CC",
                        "profile_sidebar_border_color":"FFFFFF",
                        "profile_sidebar_fill_color":"EBEFF9",
                        "profile_text_color":"000000",
                        "profile_use_background_image":true,
                        "has_extended_profile":false,
                        "default_profile":false,
                        "default_profile_image":false,
                        "following":true,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"regular"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "retweeted_status":{
                        "created_at":"Tue Jul 14 23:59:07 +0000 2020",
                        "id":1283189314411802600,
                        "id_str":"1283189314411802624",
                        "text":"We’re supporting @MSMEDU with a $1M grant and a #GoogleorgFellowship, which began with a design sprint on health eq… https://t.co/J9KPRyZuH7",
                        "truncated":true,
                        "entities":{
                            "hashtags":[
                                {
                                    "text":"GoogleorgFellowship",
                                    "indices":[
                                        48,
                                        68
                                    ]
                                }
                            ],
                            "symbols":[
        
                            ],
                            "user_mentions":[
                                {
                                    "screen_name":"MSMEDU",
                                    "name":"MSM",
                                    "id":67006855,
                                    "id_str":"67006855",
                                    "indices":[
                                        17,
                                        24
                                    ]
                                }
                            ],
                            "urls":[
                                {
                                    "url":"https://t.co/J9KPRyZuH7",
                                    "expanded_url":"https://twitter.com/i/web/status/1283189314411802624",
                                    "display_url":"twitter.com/i/web/status/1…",
                                    "indices":[
                                        117,
                                        140
                                    ]
                                }
                            ]
                        },
                        "source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
                        "in_reply_to_status_id":null,
                        "in_reply_to_status_id_str":null,
                        "in_reply_to_user_id":null,
                        "in_reply_to_user_id_str":null,
                        "in_reply_to_screen_name":null,
                        "user":{
                            "id":2499289070,
                            "id_str":"2499289070",
                            "name":"Google.org",
                            "screen_name":"Googleorg",
                            "location":"Mountain View, CA",
                            "description":"We bring the best of Google––funding, innovation, and expertise––to help solve some of humanity’s biggest challenges and provide opportunity for everyone.",
                            "url":"http://t.co/CMiTlCwW32",
                            "entities":{
                                "url":{
                                    "urls":[
                                        {
                                            "url":"http://t.co/CMiTlCwW32",
                                            "expanded_url":"http://www.google.org/",
                                            "display_url":"google.org",
                                            "indices":[
                                                0,
                                                22
                                            ]
                                        }
                                    ]
                                },
                                "description":{
                                    "urls":[
        
                                    ]
                                }
                            },
                            "protected":false,
                            "followers_count":78669,
                            "friends_count":301,
                            "listed_count":775,
                            "created_at":"Fri May 16 16:34:52 +0000 2014",
                            "favourites_count":4583,
                            "utc_offset":null,
                            "time_zone":null,
                            "geo_enabled":true,
                            "verified":true,
                            "statuses_count":2349,
                            "lang":null,
                            "contributors_enabled":false,
                            "is_translator":false,
                            "is_translation_enabled":false,
                            "profile_background_color":"C0DEED",
                            "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                            "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                            "profile_background_tile":false,
                            "profile_image_url":"http://pbs.twimg.com/profile_images/646789936603992065/A7CaGTjV_normal.png",
                            "profile_image_url_https":"https://pbs.twimg.com/profile_images/646789936603992065/A7CaGTjV_normal.png",
                            "profile_banner_url":"https://pbs.twimg.com/profile_banners/2499289070/1490049205",
                            "profile_link_color":"1DA1F2",
                            "profile_sidebar_border_color":"C0DEED",
                            "profile_sidebar_fill_color":"DDEEF6",
                            "profile_text_color":"333333",
                            "profile_use_background_image":true,
                            "has_extended_profile":false,
                            "default_profile":true,
                            "default_profile_image":false,
                            "following":false,
                            "follow_request_sent":false,
                            "notifications":false,
                            "translator_type":"none"
                        },
                        "geo":null,
                        "coordinates":null,
                        "place":null,
                        "contributors":null,
                        "is_quote_status":false,
                        "retweet_count":33,
                        "favorite_count":197,
                        "favorited":false,
                        "retweeted":false,
                        "possibly_sensitive":false,
                        "possibly_sensitive_appealable":false,
                        "lang":"en"
                    },
                    "is_quote_status":false,
                    "retweet_count":33,
                    "favorite_count":0,
                    "favorited":false,
                    "retweeted":false,
                    "lang":"en"
                },
                {
                    "created_at":"Thu Jul 16 17:00:00 +0000 2020",
                    "id":1283808615091011600,
                    "id_str":"1283808615091011585",
                    "text":"Earlier this year, @yoyo_ma shared his #SongsOfComfort during stressful times. Today @GoogleArts is releasing “Cult… https://t.co/xKBlnK0jw9",
                    "truncated":true,
                    "entities":{
                        "hashtags":[
                            {
                                "text":"SongsOfComfort",
                                "indices":[
                                    39,
                                    54
                                ]
                            }
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
                            {
                                "screen_name":"YoYo_Ma",
                                "name":"Yo-Yo Ma",
                                "id":2740821001,
                                "id_str":"2740821001",
                                "indices":[
                                    19,
                                    27
                                ]
                            },
                            {
                                "screen_name":"googlearts",
                                "name":"Google Arts&Culture",
                                "id":248965136,
                                "id_str":"248965136",
                                "indices":[
                                    85,
                                    96
                                ]
                            }
                        ],
                        "urls":[
                            {
                                "url":"https://t.co/xKBlnK0jw9",
                                "expanded_url":"https://twitter.com/i/web/status/1283808615091011585",
                                "display_url":"twitter.com/i/web/status/1…",
                                "indices":[
                                    117,
                                    140
                                ]
                            }
                        ]
                    },
                    "source":"<a href=\"https://studio.twitter.com\" rel=\"nofollow\">Twitter Media Studio</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":20536157,
                        "id_str":"20536157",
                        "name":"Google",
                        "screen_name":"Google",
                        "location":"Mountain View, CA",
                        "description":"#HeyGoogle",
                        "url":"https://t.co/4Rqq6RRNqd",
                        "entities":{
                            "url":{
                                "urls":[
                                    {
                                        "url":"https://t.co/4Rqq6RRNqd",
                                        "expanded_url":"http://google.com/racialequity",
                                        "display_url":"google.com/racialequity",
                                        "indices":[
                                            0,
                                            23
                                        ]
                                    }
                                ]
                            },
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":22126546,
                        "friends_count":289,
                        "listed_count":93079,
                        "created_at":"Tue Feb 10 19:14:39 +0000 2009",
                        "favourites_count":2816,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":true,
                        "verified":true,
                        "statuses_count":114926,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"FFFFFF",
                        "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile":true,
                        "profile_image_url":"http://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_image_url_https":"https://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_banner_url":"https://pbs.twimg.com/profile_banners/20536157/1594740368",
                        "profile_link_color":"0000CC",
                        "profile_sidebar_border_color":"FFFFFF",
                        "profile_sidebar_fill_color":"EBEFF9",
                        "profile_text_color":"000000",
                        "profile_use_background_image":true,
                        "has_extended_profile":false,
                        "default_profile":false,
                        "default_profile_image":false,
                        "following":true,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"regular"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "is_quote_status":false,
                    "retweet_count":36,
                    "favorite_count":326,
                    "favorited":false,
                    "retweeted":false,
                    "possibly_sensitive":false,
                    "possibly_sensitive_appealable":false,
                    "lang":"en"
                },
                {
                    "created_at":"Thu Jul 16 16:05:37 +0000 2020",
                    "id":1283794930264146000,
                    "id_str":"1283794930264145922",
                    "text":"Shoploop combines social, video and commerce to help you discover new beauty products with short, entertaining vide… https://t.co/9jbiDOKcSZ",
                    "truncated":true,
                    "entities":{
                        "hashtags":[
        
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
        
                        ],
                        "urls":[
                            {
                                "url":"https://t.co/9jbiDOKcSZ",
                                "expanded_url":"https://twitter.com/i/web/status/1283794930264145922",
                                "display_url":"twitter.com/i/web/status/1…",
                                "indices":[
                                    117,
                                    140
                                ]
                            }
                        ]
                    },
                    "source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":20536157,
                        "id_str":"20536157",
                        "name":"Google",
                        "screen_name":"Google",
                        "location":"Mountain View, CA",
                        "description":"#HeyGoogle",
                        "url":"https://t.co/4Rqq6RRNqd",
                        "entities":{
                            "url":{
                                "urls":[
                                    {
                                        "url":"https://t.co/4Rqq6RRNqd",
                                        "expanded_url":"http://google.com/racialequity",
                                        "display_url":"google.com/racialequity",
                                        "indices":[
                                            0,
                                            23
                                        ]
                                    }
                                ]
                            },
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":22126546,
                        "friends_count":289,
                        "listed_count":93079,
                        "created_at":"Tue Feb 10 19:14:39 +0000 2009",
                        "favourites_count":2816,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":true,
                        "verified":true,
                        "statuses_count":114926,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"FFFFFF",
                        "profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
                        "profile_background_tile":true,
                        "profile_image_url":"http://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_image_url_https":"https://pbs.twimg.com/profile_images/1253792323051204608/QiaT93TQ_normal.jpg",
                        "profile_banner_url":"https://pbs.twimg.com/profile_banners/20536157/1594740368",
                        "profile_link_color":"0000CC",
                        "profile_sidebar_border_color":"FFFFFF",
                        "profile_sidebar_fill_color":"EBEFF9",
                        "profile_text_color":"000000",
                        "profile_use_background_image":true,
                        "has_extended_profile":false,
                        "default_profile":false,
                        "default_profile_image":false,
                        "following":true,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"regular"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "is_quote_status":false,
                    "retweet_count":39,
                    "favorite_count":346,
                    "favorited":false,
                    "retweeted":false,
                    "possibly_sensitive":false,
                    "possibly_sensitive_appealable":false,
                    "lang":"en"
                },
                {
                    "created_at":"Thu Jul 16 00:48:32 +0000 2020",
                    "id":1283564139248406500,
                    "id_str":"1283564139248406528",
                    "text":"#RecipeOfTheDay #hungry #Cooking \n\nhttps://t.co/hp8GmgJHDd",
                    "truncated":false,
                    "entities":{
                        "hashtags":[
                            {
                                "text":"RecipeOfTheDay",
                                "indices":[
                                    0,
                                    15
                                ]
                            },
                            {
                                "text":"hungry",
                                "indices":[
                                    16,
                                    23
                                ]
                            },
                            {
                                "text":"Cooking",
                                "indices":[
                                    24,
                                    32
                                ]
                            }
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
        
                        ],
                        "urls":[
                            {
                                "url":"https://t.co/hp8GmgJHDd",
                                "expanded_url":"http://www.google.com",
                                "display_url":"google.com",
                                "indices":[
                                    35,
                                    58
                                ]
                            }
                        ]
                    },
                    "source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":1283438303455277000,
                        "id_str":"1283438303455277056",
                        "name":"Craig Johnson",
                        "screen_name":"craigdoescode",
                        "location":"",
                        "description":"",
                        "url":null,
                        "entities":{
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":0,
                        "friends_count":6,
                        "listed_count":0,
                        "created_at":"Wed Jul 15 16:28:47 +0000 2020",
                        "favourites_count":0,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":false,
                        "verified":false,
                        "statuses_count":10,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"F5F8FA",
                        "profile_background_image_url":null,
                        "profile_background_image_url_https":null,
                        "profile_background_tile":false,
                        "profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                        "profile_image_url_https":"https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                        "profile_link_color":"1DA1F2",
                        "profile_sidebar_border_color":"C0DEED",
                        "profile_sidebar_fill_color":"DDEEF6",
                        "profile_text_color":"333333",
                        "profile_use_background_image":true,
                        "has_extended_profile":true,
                        "default_profile":true,
                        "default_profile_image":true,
                        "following":false,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"none"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "is_quote_status":false,
                    "retweet_count":0,
                    "favorite_count":0,
                    "favorited":false,
                    "retweeted":false,
                    "possibly_sensitive":false,
                    "possibly_sensitive_appealable":false,
                    "lang":"und"
                },
                {
                    "created_at":"Thu Jul 16 00:47:15 +0000 2020",
                    "id":1283563816559624200,
                    "id_str":"1283563816559624192",
                    "text":"#Overwatch #Blizzard \nhttps://t.co/3HCfGd9i3P",
                    "truncated":false,
                    "entities":{
                        "hashtags":[
                            {
                                "text":"Overwatch",
                                "indices":[
                                    0,
                                    10
                                ]
                            },
                            {
                                "text":"Blizzard",
                                "indices":[
                                    11,
                                    20
                                ]
                            }
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
        
                        ],
                        "urls":[
                            {
                                "url":"https://t.co/3HCfGd9i3P",
                                "expanded_url":"https://www.blizzard.com/en-gb/",
                                "display_url":"blizzard.com/en-gb/",
                                "indices":[
                                    22,
                                    45
                                ]
                            }
                        ]
                    },
                    "source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":1283438303455277000,
                        "id_str":"1283438303455277056",
                        "name":"Craig Johnson",
                        "screen_name":"craigdoescode",
                        "location":"",
                        "description":"",
                        "url":null,
                        "entities":{
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":0,
                        "friends_count":6,
                        "listed_count":0,
                        "created_at":"Wed Jul 15 16:28:47 +0000 2020",
                        "favourites_count":0,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":false,
                        "verified":false,
                        "statuses_count":10,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"F5F8FA",
                        "profile_background_image_url":null,
                        "profile_background_image_url_https":null,
                        "profile_background_tile":false,
                        "profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                        "profile_image_url_https":"https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                        "profile_link_color":"1DA1F2",
                        "profile_sidebar_border_color":"C0DEED",
                        "profile_sidebar_fill_color":"DDEEF6",
                        "profile_text_color":"333333",
                        "profile_use_background_image":true,
                        "has_extended_profile":true,
                        "default_profile":true,
                        "default_profile_image":true,
                        "following":false,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"none"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "is_quote_status":false,
                    "retweet_count":0,
                    "favorite_count":0,
                    "favorited":false,
                    "retweeted":false,
                    "possibly_sensitive":false,
                    "possibly_sensitive_appealable":false,
                    "lang":"und"
                },
                {
                    "created_at":"Thu Jul 16 00:44:14 +0000 2020",
                    "id":1283563056157450200,
                    "id_str":"1283563056157450240",
                    "text":"#Overwatch \n\nhttps://t.co/ns0u4t77pT",
                    "truncated":false,
                    "entities":{
                        "hashtags":[
                            {
                                "text":"Overwatch",
                                "indices":[
                                    0,
                                    10
                                ]
                            }
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
        
                        ],
                        "urls":[
                            {
                                "url":"https://t.co/ns0u4t77pT",
                                "expanded_url":"https://playoverwatch.com/en-gb/",
                                "display_url":"playoverwatch.com/en-gb/",
                                "indices":[
                                    13,
                                    36
                                ]
                            }
                        ]
                    },
                    "source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":1283438303455277000,
                        "id_str":"1283438303455277056",
                        "name":"Craig Johnson",
                        "screen_name":"craigdoescode",
                        "location":"",
                        "description":"",
                        "url":null,
                        "entities":{
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":0,
                        "friends_count":6,
                        "listed_count":0,
                        "created_at":"Wed Jul 15 16:28:47 +0000 2020",
                        "favourites_count":0,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":false,
                        "verified":false,
                        "statuses_count":10,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"F5F8FA",
                        "profile_background_image_url":null,
                        "profile_background_image_url_https":null,
                        "profile_background_tile":false,
                        "profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                        "profile_image_url_https":"https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                        "profile_link_color":"1DA1F2",
                        "profile_sidebar_border_color":"C0DEED",
                        "profile_sidebar_fill_color":"DDEEF6",
                        "profile_text_color":"333333",
                        "profile_use_background_image":true,
                        "has_extended_profile":true,
                        "default_profile":true,
                        "default_profile_image":true,
                        "following":false,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"none"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "is_quote_status":false,
                    "retweet_count":0,
                    "favorite_count":0,
                    "favorited":false,
                    "retweeted":false,
                    "possibly_sensitive":false,
                    "possibly_sensitive_appealable":false,
                    "lang":"und"
                },
                {
                    "created_at":"Thu Jul 16 00:41:50 +0000 2020",
                    "id":1283562450902630400,
                    "id_str":"1283562450902630400",
                    "text":"https://t.co/SvMyrErAwo\n\noooh #StarWars",
                    "truncated":false,
                    "entities":{
                        "hashtags":[
                            {
                                "text":"StarWars",
                                "indices":[
                                    30,
                                    39
                                ]
                            }
                        ],
                        "symbols":[
        
                        ],
                        "user_mentions":[
        
                        ],
                        "urls":[
                            {
                                "url":"https://t.co/SvMyrErAwo",
                                "expanded_url":"https://starcraft2.com/en-gb/",
                                "display_url":"starcraft2.com/en-gb/",
                                "indices":[
                                    0,
                                    23
                                ]
                            }
                        ]
                    },
                    "source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
                    "in_reply_to_status_id":null,
                    "in_reply_to_status_id_str":null,
                    "in_reply_to_user_id":null,
                    "in_reply_to_user_id_str":null,
                    "in_reply_to_screen_name":null,
                    "user":{
                        "id":1283438303455277000,
                        "id_str":"1283438303455277056",
                        "name":"Craig Johnson",
                        "screen_name":"craigdoescode",
                        "location":"",
                        "description":"",
                        "url":null,
                        "entities":{
                            "description":{
                                "urls":[
        
                                ]
                            }
                        },
                        "protected":false,
                        "followers_count":0,
                        "friends_count":6,
                        "listed_count":0,
                        "created_at":"Wed Jul 15 16:28:47 +0000 2020",
                        "favourites_count":0,
                        "utc_offset":null,
                        "time_zone":null,
                        "geo_enabled":false,
                        "verified":false,
                        "statuses_count":10,
                        "lang":null,
                        "contributors_enabled":false,
                        "is_translator":false,
                        "is_translation_enabled":false,
                        "profile_background_color":"F5F8FA",
                        "profile_background_image_url":null,
                        "profile_background_image_url_https":null,
                        "profile_background_tile":false,
                        "profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                        "profile_image_url_https":"https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                        "profile_link_color":"1DA1F2",
                        "profile_sidebar_border_color":"C0DEED",
                        "profile_sidebar_fill_color":"DDEEF6",
                        "profile_text_color":"333333",
                        "profile_use_background_image":true,
                        "has_extended_profile":true,
                        "default_profile":true,
                        "default_profile_image":true,
                        "following":false,
                        "follow_request_sent":false,
                        "notifications":false,
                        "translator_type":"none"
                    },
                    "geo":null,
                    "coordinates":null,
                    "place":null,
                    "contributors":null,
                    "is_quote_status":false,
                    "retweet_count":0,
                    "favorite_count":0,
                    "favorited":false,
                    "retweeted":false,
                    "possibly_sensitive":false,
                    "possibly_sensitive_appealable":false,
                    "lang":"und"
                }
            ]
        }

        console.log(data.posts);
        console.log(this.props.searchString);

        if (data.success) {
            this.setState({
                posts: data.posts
            });

            let urlList = [];

            //Get posts with urls for data in sidebar.
            const filteredPosts = data.posts.filter(post => {
                if (post.entities.urls.length) {
                    //Also push urls onto an array to calculate most popular websites.
                    urlList = urlList.concat(post.entities.urls);
                    return true;
                }
                return false;
            });

            if (filteredPosts.length) {
                
                //-------------------------------------
                //Logic to find author with highest post count with links.
                
                const userPostCountMap = {};

                //Store post count per user in map.
                filteredPosts.forEach( post => {
                    userPostCountMap[post.user.name] = userPostCountMap[post.user.name] ? userPostCountMap[post.user.name] + 1 : 1;
                });

                //Find object values.
                const countArray = Object.values(userPostCountMap);

                //Pull the highest count.
                const maxCount = Math.max(...countArray);
                //Find index of highest count.
                const indexOfMaxCount = countArray.indexOf(maxCount);
                const userArray = Object.keys(userPostCountMap);
                //You can use index to pull corresponding username from map.


                //-------------------------------------
                //Logic to find most popular websites.

                const urlMap = {};

                urlList = urlList.map(url => {
                    //Pull only the domain from the url.
                    return url.expanded_url.split('/').slice(0, 3).join('/');
                });

                urlList.forEach( url => {
                    urlMap[url] = urlMap[url] ? urlMap[url] + 1 : 1;
                });

                //Push top 3 domains on mostSharedDomains.

                const topDomains = [];

                for ( let i = 0; i < Object.values(urlMap).length ; i++) {

                    const urlCountArray = Object.values(urlMap);
                    const maxURLCount = Math.max(...urlCountArray);
                    const indexOfMaxURLCount = urlCountArray.indexOf(maxURLCount);
                    const urlArray = Object.keys(urlMap);

                    topDomains.push(urlArray[indexOfMaxURLCount]);
                    delete urlMap[urlArray[indexOfMaxURLCount]];

                    if (topDomains.length >= 3) break;
                }

                this.setState({
                    topUrlSharer: userArray[indexOfMaxCount],
                    mostSharedDomains: topDomains
                });
            }
        }


        // fetch(`${serverUrl}/sessions/getPosts?oauthAccessToken=${localStorage.getItem('oauthAccessToken')}&oauthAccessTokenSecret=${localStorage.getItem('oauthAccessTokenSecret')}`) 
        //     .then(response => response.json()) 
        //     .then(data => {
                
        //         if (data.success) {
        //             this.setState({
        //                 posts: data.posts
        //             });

        //             let urlList = [];

        //             //Get posts with urls for data in sidebar.
        //             const filteredPosts = data.posts.filter(post => {
        //                 if (post.entities.urls.length) {
        //                     //Also push urls onto an array to calculate most popular websites.
        //                     urlList = urlList.concat(post.entities.urls);
        //                     return true;
        //                 }
        //                 return false;
        //             });

        //             if (filteredPosts.length) {
                        
        //                 //-------------------------------------
        //                 //Logic to find author with highest post count with links.
                        
        //                 const userPostCountMap = {};

        //                 //Store post count per user in map.
        //                 filteredPosts.forEach( post => {
        //                     userPostCountMap[post.user.name] = userPostCountMap[post.user.name] ? userPostCountMap[post.user.name] + 1 : 1;
        //                 });

        //                 //Find object values.
        //                 const countArray = Object.values(userPostCountMap);

        //                 //Pull the highest count.
        //                 const maxCount = Math.max(...countArray);
        //                 //Find index of highest count.
        //                 const indexOfMaxCount = countArray.indexOf(maxCount);
        //                 const userArray = Object.keys(userPostCountMap);
        //                 //You can use index to pull corresponding username from map.


        //                 //-------------------------------------
        //                 //Logic to find most popular websites.

        //                 const urlMap = {};

        //                 urlList = urlList.map(url => {
        //                     //Pull only the domain from the url.
        //                     return url.expanded_url.split('/').slice(0, 3).join('/');
        //                 });

        //                 urlList.forEach( url => {
        //                     urlMap[url] = urlMap[url] ? urlMap[url] + 1 : 1;
        //                 });

        //                 //Push top 3 domains on mostSharedDomains.

        //                 const topDomains = [];

        //                 for ( let i = 0; i < Object.values(urlMap).length ; i++) {

        //                     const urlCountArray = Object.values(urlMap);
        //                     const maxURLCount = Math.max(...urlCountArray);
        //                     const indexOfMaxURLCount = urlCountArray.indexOf(maxURLCount);
        //                     const urlArray = Object.keys(urlMap);

        //                     topDomains.push(urlArray[indexOfMaxURLCount]);
        //                     delete urlMap[urlArray[indexOfMaxURLCount]];

        //                     if (topDomains.length >= 3) break;
        //                 }

        //                 this.setState({
        //                     topUrlSharer: userArray[indexOfMaxCount],
        //                     mostSharedDomains: topDomains
        //                 });
        //             }


        //         }

        //         this.setState({loading : false});
        //     })
        //     .catch(data => {
        //         console.error('something went wrong');
        //         this.setState({loading : false});
        //     }); 
    }

	render() {

        console.log("------------------------",this.props.searchString);

        // console.log(post.user.location);
        // console.log(post.entities.hashtags);

        //You could memoize the filter function to improve performance.
        let filteredPostsBySearch = [];
        if (this.props.searchString.length) {

            filteredPostsBySearch = this.state.posts.filter(post => {

                if (post.entities.hashtags.length) {
                    // console.log(post.entities.hashtags)

                    //Convert to lower case to provide case insensitive search.
                    const hashTagStrings = post.entities.hashtags.map( hashtag => hashtag.text.toLowerCase() );

                    if (hashTagStrings.includes(this.props.searchString.toLowerCase())) {
                        //If exists in array return true
                        return true;
                    }
                }
                return false;
                
            });
        } else {
            filteredPostsBySearch = this.state.posts;
        }

		return (
            <>
                <div className="main">
                    <ul className="tweetList">
                    {filteredPostsBySearch.length ?
                        filteredPostsBySearch.map(post => (
                                <li className="tweet" key={post.id}>
                                    <p className="username">{post.user.name}: <span className="screenName">@{post.user.screen_name}</span></p>
                                    <p className="text">{post.text}</p>
                                </li>
                            )
                        )
                        : <li>No posts to show.</li>
                    }
                    </ul>
                </div>
                <div className="sidebar">
                    <button onClick={this.logout} className="logout">logout</button>

                    {this.state.topUrlSharer ?
                        (
                            <>
                                <p>Top URL Sharer: </p>
                                <p className="info">{this.state.topUrlSharer}</p>
                                <p>Most popular websites:</p>
                                <ul className="info">
                                    {
                                        this.state.mostSharedDomains.map( domain => (
                                            <li key={domain}>{domain}</li>
                                        ))
                                    }
                                </ul>
                            </>
                        ) : (
                            <p>No posts with urls exist</p>
                        )
                    }
                    
                </div>
            </>
		);
	}
}

export default Home;
