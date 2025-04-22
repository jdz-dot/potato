export async function onRequestPost(context) {
  const body = await context.request.text();

  // ⚠️ 这里改成你的目标地址（即你的 Worker 域名）
  const forwardUrl = "https://ai.jdz.ip-ddns.com/";

  const res = await fetch(forwardUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });

  const responseText = await res.text();

  return new Response(`转发成功: ${responseText}`, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}
