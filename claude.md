# Project: ICE Tours VT

This project is a static website designed to inform the public about ICE Tours VT.

## What (Architecture and Structure)

*   **Frontend:** Static Website using only HTML, CSS and Javascript.
*   **General Page Layout:** 
    - All pages (except index.html) should have a header with a miniature version of the `img/primary_logo.png` and the words "ICE Tours VT" on it. There should be navigation links entitled "Home", "About ICE in VT", "Schedule" and "Contact" linking to the appropriate pages. 
    - Clicking on the miniaturized logo should link to `index2.html`.
    

*   **Website Style:**
    - The tone of the website should be upbeat and cheerful but also not hide the fact that these facilities are actors in state dominance of the populace.
    - The layout, background and font should be cartoony and whimsical. Look at the `img/marginalia` folder and support_info folders for inspiration and these websites:
        - https://www.thefarside.com/
        - https://theoatmeal.com/
        - https://www.cartoonstock.com/

*   **Art Assets:** 
    - use the images located in the `img/marginalia` folder to appropriately add to the whimisical and cartoony feel of the site. As denotes, these images are marginalia and should not be prominently featured. They can be shrunk or rotated as necessary.

    - the images in `img/facilities` are only in the about_ice_in_vt.html page as described below. 
    
*   **Pages:**
    -   `index.html`: "Coming Soon" landing page. Has no header/navigation. Shows the logo, "Coming Soon" heading, and brief placeholder text.
    -   `index2.html`: Full homepage. Prominently features the ICE Tours VT logo located at `img/primary_logo.png`. Contains a few sentences describing the website's purpose and ends with "Come join us on a tour!" Header logo links to this page.
    -   `about_ice_in_vt.html`: This page should have some brief (a few sentences) header text. Then there should be a panel for each of the facilities in the `img/facilities` folder. Each panel should be as follows:
        - Address of the facility at the top
        - The picture of the facility
        - Some bullet points below the facility with lorem ipsum text.

    Finally, there should be a box at the end with the following div:
    ```HTML
     <div class="why-matters">
        <h2>Why This Matters</h2>
                <p>
                    These aren't your typical government office buildings. These facilities represent
                    significant infrastructure for federal surveillance and immigration enforcement
                    that affects communities nationwide &mdash; all operating quietly in Vermont.
                </p>
                <p>
                    Our tours help shine a light on these operations so that Vermonters can see for
                    themselves what's happening in their community. Whether you're curious, concerned,
                    or just want to see something unusual, ICE Tours VT offers a unique opportunity
                    to witness this infrastructure firsthand.
                </p>
                <p>
                    <strong>After all, seeing is believing!</strong>
                </p>
            </div>
    ```
    -   `schedule.html`: This page should be a three column table with headers of "Date", "Time", and "Start Location". There should only be one row with "TBD" in all 3 cols.
    -   `contact.html`: This page should feature a contact page. However do not construct the contact form. Instead put this HTML for a contact page:

        <iframe class="airtable-embed" src="https://airtable.com/embed/app1OEIXVKDqP2BEu/pagJO3cM36OESsWxq/form" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

    

## Why (Purpose and Goals)

ICE Tours VT is an organization which hosts tours of ICE facilities in the Burlington, Vermont area. The purpose of the organization is
to show the public what ICE is doing and the infrastructure required to accomplish their nefarious goals. However, the tours
they host are joking versions of normal tourbus tours such as the ones that can be found in Los Angeles or New York. That is 
because ICE is bad and going on a tourist tour of their facilities is a bit strange and ridiculous.

The tone of the website should be upbeat and cheerful but also not hide the fact that these facilities are actors in state dominance of the populace.

## Coding Standards & Guardrails

*   **Code Style:** Please use a separate "styles.css" for all css.
- header and footer should exist as separate files.

## General

- Please ask me questions if something is unclear.
- Do not use any git history before commit id: 5fa0f12125fc127506357e14fcf0d76ba11b0e89. The site is very different before that commit and should not be used to create the site.