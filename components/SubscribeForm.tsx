import React from "react";
import Head from "next/head";
import { Text, Input, Button } from "theme-ui";

export function SubscribeForm() {
  return (
    <>
      <Head>
        <link
          href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
          rel="stylesheet"
          type="text/css"
        />
        <style type="text/css">
          {`
#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
`}
        </style>
      </Head>
      <div id="mc_embed_signup">
        <form
          action="https://okjulian.us18.list-manage.com/subscribe/post?u=ad30d52118c59fa8107175b9f&amp;id=dfde2c9573"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <label htmlFor="mce-EMAIL">
              <Text>Subscribe to get content from time to time</Text>
            </label>
            <Input
              type="email"
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder="email address"
              required
              style={{ marginRight: 10 }}
            />
            <div
              style={{ position: "absolute", left: -5000 }}
              aria-hidden="true"
            >
              <Input
                type="text"
                name="b_d44198b27d5fba22549f52339_b1b66796bb"
                tabIndex={-1}
              />
            </div>
            <div className="clear">
              <Button
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                sx={{ cursor: "pointer" }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
