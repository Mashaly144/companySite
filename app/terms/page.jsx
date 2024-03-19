"use client";

import useGetData from "@Hooks/useGetData";
import PageHeader from "@shared/PageHeader";
import ProjectCard from "@shared/ProjectCard";
import Link from "next/link";
import React from "react";

const Page = () => {
  const { data, loading } = useGetData("getProjects");

  return (
    <>
      <PageHeader img={"/assets/cover.png"} pageName="Terms, Conditions" />
      <section className="my-[100px] container">
        <div class="terms-text">
          <div class="group">
            <h1>Privacy Policy</h1>
            <p>
              Protecting and preserving the personal data of Roqay’s visitors
              and members is one of our top priorities, our privacy statement
              and policy explains how Roqay’s website collects the personal
              information of members and visitors and how this information is
              used. By accessing the Roqay website or registering for one of its
              services, you give the Roqay website approval to collect and use
              your personal information as described in the Privacy Policy
              statement below, as well as to approve all of the items mentioned
              on this page.
            </p>
          </div>

          <div class="group">
            <h1>Collecting personal information</h1>
            <p>
              Roqay’s website collects your personal data directly through you
              or indirectly, the site of the firmly collects this data through
              the information you provide yourself for the purpose of
              registering for any of the website services, such as personal
              name, gender, date of birth, job Mailing address, email, phone
              number and other data, as well as information obtained because of
              your use and browsing of any of the site’s pages such as your IP
              address, operating system used, browser type, ISP, time you spend
              each The page, the pages you visit, the replies and posts you add,
              etc., as well as any other information you share with Roqay’s
              website
            </p>
          </div>

          <div class="group">
            <h1>Use of personal information</h1>
            <p>
              Roqay’s website uses your personal information for a number of
              purposes, including, but not limited to, allowing you to access
              and use the site, providing you with a specific service, sending
              updates and news, preparing statistics and reports on the
              popularity of the site among internet users, improving the
              website’s performance, services and other uses. Roqay’s website
              has the right to disclose your personal information to the extent
              required in accordance with the laws in relation to any current or
              anticipated legal proceedings, and for the purpose of establishing
              and exercising the defence of his legal rights. Roqay is also not
              responsible for the privacy policies or practices of any third
              party that may use your evidence.
            </p>
          </div>

          <div class="group">
            <h1>Share personal data</h1>
            <p>
              Roqay may share your personal data with third parties for
              marketing purposes: name, email, phone number, country, city,
              etc., and you are able to register in any data collection form on
              the Roqay website. Roqay is also not responsible for the privacy
              policies or practices of any third party that may use your data.
            </p>
          </div>

          <div class="group">
            <h1>Secure your data</h1>
            <p>
              Roqay website will take all reasonable technical and
              administrative precautions to prevent the loss, misuse or
              alteration of your personal information. Roqay website will also
              store all your personal information in its secure Web Servers.
            </p>
          </div>

          <div class="group">
            <h1>Moving data out</h1>
            <p>
              The information collected by Roqay’s website may be saved,
              handled, transferred and traded between any of the countries where
              Roqay’s website operates, one of its branches or any other parties
              to enable the use of such information in accordance with the
              site’s privacy policy. Once you have used or registered on the
              Roqay website, you agree to transfer your personal information
              beyond the limits as described.
            </p>
          </div>

          <div class="group">
            <h1>Update this statement</h1>
            <p>
              Check this page from time to time for updates or updates. Roqay
              website may update the privacy policy by adding, modifying or
              deleting some or all of the terms.
            </p>
          </div>

          <div class="group">
            <h1>Intellectual property rights</h1>
            <p>
              Copyright ownership of this site and its contents is reserved for
              the site of the established and those who have a license
              (including without any limits of content including text, site
              programming, design and images, audio, visual, and flash content).
              Roqay gives you permission to view this site and its contents on a
              computer or mobile phone via a web browser, publish or save this
              site and its contents on your device’s memory, and print pages
              from the site (for use on an individual level and for
              non-commercial purposes). Roqay does not grant you any other
              rights with respect to this site and its contents, meaning that
              any other rights are reserved. In order to avoid confusion, you
              must not transfer, write, change, publish, republish, republish,
              redistribute, broadcast, rebroadcast, view or operate this site or
              material contained by the public (by any means of publication)
              without a written permission from the Arab Trader website.
            </p>
          </div>

          <div class="group">
            <h1>Data extraction</h1>
            <p>
              The automatic and/or regular collection of data from the website
              is prohibited for the average user. Approval must be obtained from
              the management of the Arab Trader website to obtain any data from
              the site and display it on other sites.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
